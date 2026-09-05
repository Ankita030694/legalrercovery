fpath = 'src/app/send-a-legal-notice/gym-yoga-club-membership-fee-refund/GymYogaClubMembershipFeeRefundClient.tsx'
with open(fpath) as f:
    for i, line in enumerate(f, 1):
        if 'href=' in line and 'legalrecovery.in' not in line and not line.strip().startswith('item:'):
            print(f"{i}: {line.strip()[:100]}")
