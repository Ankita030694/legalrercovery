import os
import re

slugs = [
  'recover-money-from-business-partner-cheating-india',
  'recover-gratuity-from-employer-legal-notice',
  'pharmacy-invoice-not-cleared',
  'leave-encashment-not-paid-by-employer',
  'property-dispute-money-stuck',
  'gym-yoga-club-membership-fee-refund',
  'hospital-for-medical-negligence-refund',
  'for-nbfc-to-recover-their-unpaid-dues',
  'insurance-claim-not-settled-delay',
  'for-banks-to-recover-their-unpaid-dues',
  'for-business-to-recover-their-unpaid-dues',
  'employer-deduct-salary-without-notice-legal-action',
  'employer-not-paying-pf-provident-fund',
  'delayed-salary-startup-company-india',
  'company-not-paying-bonus',
  'commission-not-paid-by-company',
  'company-not-paying-gratuity',
  'college-security-deposit-refund',
  'co-founder-startup-unpaid-dues-equity',
  'b2b-invoice-not-recieved',
  'agency-not-paying-the-creator'
]

base_dir = 'src/app/send-a-legal-notice'
for slug in slugs:
    dir_path = os.path.join(base_dir, slug)
    for root, dirs, files in os.walk(dir_path):
        for f in files:
            if f.endswith('Client.tsx'):
                content = open(os.path.join(root, f)).read()
                has_share = 'shareUrl' in content or 'twitter.com/intent/tweet' in content
                has_authority = 'Statutory References' in content or 'Authoritative Sources' in content or 'Official Government Portals' in content
                # Find all external links
                links = re.findall(r'<a\s+[^>]*href=[{\"\']\s*[`\"\']?(https?://[^\"\'`}\s>]+)', content)
                ext = [l for l in links if 'legalrecovery.in' not in l]
                print(f"{slug}: total ext={len(ext)}, share_bar={has_share}, authority_box={has_authority}")
