import Link from "next/link";
import SectionHub, { hubMetadata, type HubGroup } from "@/components/SectionHub";

export const revalidate = 86400;

const TITLE = "हिंदी में कानूनी वसूली गाइड: लीगल नोटिस, उधार और चेक बाउंस";
const DESCRIPTION =
  "लीगल नोटिस कैसे भेजें, उधार का पैसा कैसे वापस लें, चेक बाउंस और ऑनलाइन फ्रॉड में क्या करें — आसान हिंदी में पूरी जानकारी।";

export const metadata = hubMetadata({ path: "/hi", title: TITLE, description: DESCRIPTION, locale: "hi_IN" });

const GROUPS: HubGroup[] = [
  {
    heading: "आम लोगों के लिए",
    items: [
      { slug: "legal-notice-kaise-bheje", title: "लीगल नोटिस कैसे भेजें", desc: "प्रक्रिया, खर्च, समय सीमा और नोटिस के बाद क्या होता है।" },
      { slug: "udhar-paisa-wapas-kaise-le", title: "उधार दिया पैसा वापस कैसे लें", desc: "सबूत, कानूनी नोटिस, समय सीमा और कोर्ट का रास्ता।" },
      { slug: "cheque-bounce-notice-kitne-din-mein", title: "चेक बाउंस: नोटिस कितने दिन में भेजें", desc: "30 दिन में नोटिस, 15 दिन भुगतान और 1 महीने में केस — धारा 138 की पूरी प्रक्रिया।" },
      { slug: "cyber-fraud-paisa-wapas-kaise-milega", title: "ऑनलाइन फ्रॉड का पैसा वापस कैसे मिलेगा", desc: "1930, बैंक शिकायत और RBI के जीरो लायबिलिटी नियम।" },
      { slug: "money-recovery-case-kitna-time-lagta-hai", title: "मनी रिकवरी केस में कितना समय लगता है", desc: "नोटिस, समरी सूट, चेक बाउंस और उपभोक्ता केस में लगने वाला समय।" },
    ],
  },
  {
    heading: "व्यापारियों के लिए",
    items: [
      { slug: "factory-msme-b2b-udhar-bill-recovery-legal-notice", title: "फैक्ट्री और B2B व्यापार का फंसा पेमेंट", desc: "GST बिल का बकाया, MSME 45-दिन नियम और लीगल नोटिस।" },
      { slug: "building-material-sariya-cement-rmc-udhar-recovery-notice", title: "सरिया, सीमेंट और बिल्डिंग मटेरियल का उधार", desc: "बिल्डर या ठेकेदार से बकाया वसूली: धारा 138 और समरी सूट।" },
      { slug: "kapda-vyapari-textile-garment-udhar-vasooli-legal-notice", title: "कपड़ा व्यापारियों की उधार वसूली", desc: "पार्टी या दलाल से फंसा पेमेंट कानूनन कैसे वसूलें।" },
      { slug: "khad-beej-pesticide-cold-storage-mandi-udhar-recovery-notice", title: "खाद-बीज डीलर, मिल और कोल्ड स्टोरेज का उधार", desc: "सीज़नल उधार और कोल्ड स्टोरेज किराए की कानूनी वसूली।" },
      { slug: "transport-bilty-truck-bhada-recovery-legal-notice", title: "ट्रांसपोर्टर का रुका हुआ ट्रक भाड़ा", desc: "बिल्टी और ई-वे बिल के आधार पर भाड़ा और हॉल्टिंग चार्ज की वसूली।" },
    ],
  },
];

export default function HindiHubPage() {
  return (
    <SectionHub
      path="/hi"
      crumb="हिंदी"
      schemaName={TITLE}
      heading="हिंदी में पैसा वसूली की गाइड"
      intro={(count) => (
        <>
          पैसा वापस पाने से जुड़े कानून की {count} गाइड, आसान हिंदी में। हर गाइड में बताया गया है कि कौन-सा कानून लागू होता है, समय सीमा क्या है और नोटिस कैसे भेजना है। नोटिस भेजने के लिए{" "}
          <Link href="/send-legal-notice-online-india" className="text-red-400 underline font-semibold">ऑनलाइन लीगल नोटिस</Link> देखें।
        </>
      )}
      groups={GROUPS}
      moreHeading="और गाइड"
      relatedHeading="यह भी देखें"
      related={[
        { href: "/templates/cheque-bounce-notice-format-hindi", label: "चेक बाउंस नोटिस का फॉर्मेट (हिंदी)" },
        { href: "/legal-notice-charges", label: "लीगल नोटिस का खर्च" },
        { href: "/templates", label: "मुफ़्त लेटर और नोटिस फॉर्मेट" },
      ]}
    />
  );
}
