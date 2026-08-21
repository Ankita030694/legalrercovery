import fs from 'fs';
import path from 'path';

interface CachedFonts {
  timesRegularBase64: string;
  timesBoldBase64: string;
  bookmanFontBase64: string;
}

let cachedFonts: CachedFonts | null = null;

export function getNoticeFonts(): CachedFonts {
  if (cachedFonts) return cachedFonts;

  let timesRegularBase64 = '';
  let timesBoldBase64 = '';
  let bookmanFontBase64 = '';

  try {
    const publicFontsPath = path.join(process.cwd(), 'public', 'fonts');

    // Times New Roman Regular
    const regularWoff2 = path.join(publicFontsPath, 'TimesNewRoman-Regular.woff2');
    const regularTtf = path.join(publicFontsPath, 'TimesNewRoman.ttf');
    if (fs.existsSync(regularWoff2)) {
      timesRegularBase64 = fs.readFileSync(regularWoff2, 'base64');
    } else if (fs.existsSync(regularTtf)) {
      timesRegularBase64 = fs.readFileSync(regularTtf, 'base64');
    }

    // Times New Roman Bold
    const boldWoff2 = path.join(publicFontsPath, 'TimesNewRoman-Bold.woff2');
    const boldTtf = path.join(publicFontsPath, 'TimesNewRomanBold.ttf');
    if (fs.existsSync(boldWoff2)) {
      timesBoldBase64 = fs.readFileSync(boldWoff2, 'base64');
    } else if (fs.existsSync(boldTtf)) {
      timesBoldBase64 = fs.readFileSync(boldTtf, 'base64');
    }

    // Bookman Style / Libre Baskerville
    const bookmanWoff2 = path.join(publicFontsPath, 'LibreBaskerville-Regular.woff2');
    if (fs.existsSync(bookmanWoff2)) {
      bookmanFontBase64 = fs.readFileSync(bookmanWoff2, 'base64');
    }
  } catch (err) {
    console.warn('[NoticeFonts] Could not load font files:', err);
  }

  cachedFonts = {
    timesRegularBase64,
    timesBoldBase64,
    bookmanFontBase64,
  };

  return cachedFonts;
}

export function getTimesFontFaceCSS(timesRegularBase64?: string, timesBoldBase64?: string): string {
  const fonts = (!timesRegularBase64 || !timesBoldBase64) ? getNoticeFonts() : null;
  const regular = timesRegularBase64 || fonts?.timesRegularBase64 || '';
  const bold = timesBoldBase64 || fonts?.timesBoldBase64 || '';

  let css = '';
  if (regular) {
    css += `
  @font-face {
    font-family: 'Times New Roman';
    src: url('data:font/woff2;base64,${regular}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Times';
    src: url('data:font/woff2;base64,${regular}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;
  }
  if (bold) {
    css += `
  @font-face {
    font-family: 'Times New Roman';
    src: url('data:font/woff2;base64,${bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Times';
    src: url('data:font/woff2;base64,${bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
`;
  }
  return css;
}

export function getBookmanFontFaceCSS(bookmanFontBase64?: string): string {
  const fonts = !bookmanFontBase64 ? getNoticeFonts() : null;
  const bookman = bookmanFontBase64 || fonts?.bookmanFontBase64 || '';

  if (!bookman) return '';
  return `
  @font-face {
    font-family: 'BookmanStyle';
    src: url('data:font/woff2;base64,${bookman}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;
}
