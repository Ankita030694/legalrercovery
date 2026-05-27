import fs from "fs";
import path from "path";

export type LegalSubsection = {
  title: string;
  items: string[];
};

export type LegalSection = {
  number: string;
  title: string;
  intro: string[];
  subsections: LegalSubsection[];
  items: string[];
};

export type LegalDocument = {
  title: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
};

const EFFECTIVE_DATE = "27 May 2026";

function parseSectionContent(lines: string[]): {
  intro: string[];
  subsections: LegalSubsection[];
  items: string[];
} {
  const intro: string[] = [];
  const subsections: LegalSubsection[] = [];
  const items: string[] = [];
  let currentSub: LegalSubsection | null = null;
  let phase: "intro" | "items" = "intro";

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    if (/^[A-Z]\.\s/.test(line)) {
      currentSub = { title: line, items: [] };
      subsections.push(currentSub);
      phase = "items";
      continue;
    }

    if (currentSub) {
      currentSub.items.push(line);
      continue;
    }

    if (phase === "intro") {
      intro.push(line);
      if (line.endsWith(":")) {
        phase = "items";
      }
      continue;
    }

    items.push(line);
  }

  return { intro, subsections, items };
}

function parseLegalText(raw: string): LegalDocument {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const title = lines[0]?.trim() || "Legal Document";

  let effectiveDate = EFFECTIVE_DATE;
  const intro: string[] = [];
  const sectionStartIndex = lines.findIndex((line) => /^\d+\.\s/.test(line.trim()));

  for (let i = 2; i < (sectionStartIndex === -1 ? lines.length : sectionStartIndex); i++) {
    const line = lines[i]?.trim() ?? "";
    if (!line) continue;
    if (line.startsWith("Effective Date:")) {
      effectiveDate = line
        .replace("Effective Date:", "")
        .replace("[Insert Date]", EFFECTIVE_DATE)
        .trim() || EFFECTIVE_DATE;
      continue;
    }
    if (line === "Legal Recovery" || line === title) continue;
    intro.push(line);
  }

  const sections: LegalSection[] = [];
  if (sectionStartIndex === -1) {
    return { title, effectiveDate, intro, sections };
  }

  let currentSection: { number: string; title: string; lines: string[] } | null = null;

  for (let i = sectionStartIndex; i < lines.length; i++) {
    const line = lines[i] ?? "";
    const trimmed = line.trim();
    const sectionMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);

    if (sectionMatch) {
      if (currentSection) {
        const { intro: sIntro, subsections, items } = parseSectionContent(
          currentSection.lines
        );
        sections.push({
          number: currentSection.number,
          title: currentSection.title,
          intro: sIntro,
          subsections,
          items,
        });
      }
      currentSection = {
        number: sectionMatch[1],
        title: sectionMatch[2],
        lines: [],
      };
      continue;
    }

    if (currentSection) {
      currentSection.lines.push(line);
    }
  }

  if (currentSection) {
    const { intro: sIntro, subsections, items } = parseSectionContent(
      currentSection.lines
    );
    sections.push({
      number: currentSection.number,
      title: currentSection.title,
      intro: sIntro,
      subsections,
      items,
    });
  }

  return { title, effectiveDate, intro, sections };
}

function readLegalFile(filename: string): LegalDocument {
  const filePath = path.join(process.cwd(), "public", filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return parseLegalText(raw);
}

export function getPrivacyPolicy(): LegalDocument {
  return readLegalFile("privacy.txt");
}

export function getTermsAndConditions(): LegalDocument {
  return readLegalFile("tandc.txt");
}
