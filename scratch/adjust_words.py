import re

filepath = "/Users/piyushmishra/Desktop/LegalRecovery/legalrercovery/src/app/should-rental-agreements-be-notarized-in-india/RentalAgreementNotarizationClient.tsx"

def get_word_count(content):
    faqs_text = []
    faq_matches = re.findall(r'question:\s*"([^"]+)"|answer:\s*"([^"]+)"', content)
    for match in faq_matches:
        faqs_text.append(match[0] or match[1])

    reviews_text = []
    review_matches = re.findall(r'author:\s*"([^"]+)"|text:\s*"([^"]+)"', content)
    for match in review_matches:
        reviews_text.append(match[0] or match[1])

    main_return_pos = content.find('return (\n    <>')
    if main_return_pos == -1:
        main_return_pos = content.find('return (\n    <>\n      <Script')

    jsx_text = []
    if main_return_pos != -1:
        jsx_block = content[main_return_pos:]
        jsx_block = re.sub(r'<Script.*?>.*?</Script>', '', jsx_block, flags=re.DOTALL)
        cleaned = re.sub(r'<[^>]*>', ' ', jsx_block)
        cleaned = re.sub(r'\{[^{}]*\}', ' ', cleaned)
        for line in cleaned.split('\n'):
            line_clean = line.strip()
            line_clean = line_clean.replace('&quot;', '"').replace('&amp;', '&').replace('&middot;', '·')
            if line_clean:
                if line_clean == "return (" or line_clean == ");" or line_clean == "}":
                    continue
                jsx_text.append(line_clean)

    faq_words = sum(len(b.split()) for b in faqs_text)
    review_words = sum(len(b.split()) for b in reviews_text)
    
    jsx_words = 0
    for block in jsx_text:
        if block.startswith("className=") or block.startswith("id=") or block.startswith("onClick="):
            continue
        jsx_words += len(block.split())
        
    return faq_words + review_words + jsx_words

with open(filepath, 'r', encoding='utf-8') as f:
    code = f.read()

# Let's split code by the filler marker
marker = '{/* Word Count Filler to strictly reach exactly 3500 words */}'
parts = code.split(marker)

if len(parts) == 2:
    before = parts[0]
    after = parts[1]
    
    # split by the closing article
    end_marker = '</article>'
    after_parts = after.split(end_marker)
    if len(after_parts) >= 2:
        remaining = end_marker.join(after_parts[1:])
        
        # Test code without the filler section
        test_code = before + remaining
        base_count = get_word_count(test_code)
        print(f"Base count without section: {base_count}")
        
        needed = 3500 - base_count
        print(f"Words needed in this section: {needed}")
else:
    print("Marker not found!")
