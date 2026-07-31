import re

filepath = "/Users/piyushmishra/Desktop/LegalRecovery/legalrercovery/src/app/should-rental-agreements-be-notarized-in-india/RentalAgreementNotarizationClient.tsx"

with open(filepath, 'r', encoding='utf-8') as f:
    code = f.read()

main_return_pos = code.find('return (\n    <>')
if main_return_pos == -1:
    main_return_pos = code.find('return (\n    <>\n      <Script')

jsx_block = code[main_return_pos:]
jsx_block = re.sub(r'<Script.*?>.*?</Script>', '', jsx_block, flags=re.DOTALL)
cleaned = re.sub(r'<[^>]*>', ' ', jsx_block)
cleaned = re.sub(r'\{[^{}]*\}', ' ', cleaned)

with open("/Users/piyushmishra/Desktop/LegalRecovery/legalrercovery/scratch/jsx_blocks.txt", "w", encoding="utf-8") as out:
    for line in cleaned.split('\n'):
        line_clean = line.strip()
        line_clean = line_clean.replace('&quot;', '"').replace('&amp;', '&').replace('&middot;', '·')
        if line_clean:
            if line_clean in ["return (", ");", "}"]:
                continue
            if line_clean.startswith("className=") or line_clean.startswith("id=") or line_clean.startswith("onClick="):
                continue
            words = line_clean.split()
            if len(words) > 0:
                out.write(f"[{len(words)} words] {line_clean}\n")
