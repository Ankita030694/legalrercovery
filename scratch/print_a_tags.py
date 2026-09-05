import os
import re

slugs = [
  'college-security-deposit-refund',
  'recover-money-from-business-partner-cheating-india',
  'recover-gratuity-from-employer-legal-notice',
]

base_dir = 'src/app/send-a-legal-notice'
for slug in slugs:
    dir_path = os.path.join(base_dir, slug)
    for root, dirs, files in os.walk(dir_path):
        for f in files:
            if f.endswith('Client.tsx'):
                content = open(os.path.join(root, f)).read()
                # Find all <a> tags with href
                tags = re.findall(r'<a\s+[^>]*href=[{\"\']\s*[`\"\']?(https?://[^\"\'`}\s>]+)[^>]*>(.*?)</a>', content, re.DOTALL)
                print(f"=== {slug} ({len(tags)} links) ===")
                for href, text in tags:
                    clean_text = re.sub(r'<[^>]+>', '', text).strip()
                    clean_text = re.sub(r'\s+', ' ', clean_text)
                    print(f"  {href} -> '{clean_text[:40]}'")
