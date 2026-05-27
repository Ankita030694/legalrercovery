import LegalDocumentPage from "@/components/LegalDocumentPage";
import { getPrivacyPolicy } from "@/lib/legal-content";

export default function PrivacyPolicyPage() {
  const document = getPrivacyPolicy();

  return (
    <LegalDocumentPage
      document={document}
      breadcrumbLabel="Privacy Policy"
      breadcrumbHref="/privacy-policy"
    />
  );
}
