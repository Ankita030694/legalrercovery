import re

filepath = "/Users/piyushmishra/Desktop/LegalRecovery/legalrercovery/src/app/should-rental-agreements-be-notarized-in-india/RentalAgreementNotarizationClient.tsx"

with open(filepath, 'r', encoding='utf-8') as f:
    code = f.read()

# Let's extract the faqs and reviews text content first
faqs_text = []
# Extract all string literals inside faqs array
# faqs starts at: const faqs = [ and ends at ];
faqs_match = re.search(r'const faqs = \[(.*?)\];', code, re.DOTALL)
if faqs_match:
    faq_block = faqs_match.group(1)
    # find all "question": "..." or "answer": "..."
    strings = re.findall(r'"([^"]*)"', faq_block)
    faqs_text.extend(strings)

reviews_text = []
reviews_match = re.search(r'const reviews = \[(.*?)\];', code, re.DOTALL)
if reviews_match:
    review_block = reviews_match.group(1)
    strings = re.findall(r'"([^"]*)"', review_block)
    reviews_text.extend(strings)

# Now, let's extract the JSX content inside return (...)
return_match = re.search(r'return \((.*?)\);\s*\}', code, re.DOTALL)
jsx_text = []
if return_match:
    jsx_block = return_match.group(1)
    
    # Strip HTML/JSX tags
    # Remove script tags and their content
    jsx_block = re.sub(r'<Script.*?>.*?</Script>', '', jsx_block, flags=re.DOTALL)
    
    # Remove all JSX tags like <main className="..."> or </main> or <Link href="...">
    # We can replace tags with spaces
    cleaned = re.sub(r'<[^>]*>', ' ', jsx_block)
    
    # Remove JS curly braces expressions like {reviews.map(...)} or {expandedFaqs.includes(...)}
    # We can remove anything between curly braces that looks like code
    # (Since curly braces contain code, we can remove them. However, some text might contain braces? No, in our JSX, braces only contain code).
    # Simple brace remover:
    cleaned = re.sub(r'\{[^{}]*\}', ' ', cleaned)
    
    # Split by lines and clean
    for line in cleaned.split('\n'):
        line_clean = line.strip()
        # Remove quotes from inline strings like &quot;
        line_clean = line_clean.replace('&quot;', '"').replace('&amp;', '&').replace('&middot;', '·')
        if line_clean:
            jsx_text.append(line_clean)

# Now let's calculate word count of all collected text
all_text_blocks = []
all_text_blocks.extend(jsx_text)
all_text_blocks.extend(faqs_text)
all_text_blocks.extend(reviews_text)

# Let's count words in each block
total_words = 0
with open("/Users/piyushmishra/Desktop/LegalRecovery/legalrercovery/scratch/extracted_prose_exact.txt", "w", encoding="utf-8") as out:
    for block in all_text_blocks:
        # Ignore lines that are just style classes or JSX properties that leaked
        if block.startswith("className=") or block.startswith("id=") or block.startswith("onClick="):
            continue
        # Ignore empty or very short blocks that don't contain words
        words = block.split()
        if len(words) > 0:
            out.write(block + "\n")
            total_words += len(words)

print(f"Total Words Counted: {total_words}")
