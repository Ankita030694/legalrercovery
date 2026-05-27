import LegalDocumentPage from "@/components/LegalDocumentPage";
import { getTermsAndConditions } from "@/lib/legal-content";

export default function TermsAndConditionsPage() {
  const document = getTermsAndConditions();

  return (
    <LegalDocumentPage
      document={document}
      breadcrumbLabel="Terms & Conditions"
      breadcrumbHref="/terms-and-conditions"
    />
  );
}
