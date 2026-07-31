import re

filepath = "/Users/piyushmishra/Desktop/LegalRecovery/legalrercovery/src/app/should-rental-agreements-be-notarized-in-india/RentalAgreementNotarizationClient.tsx"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# We want to identify and count all user-visible text.
# 1. faqs array: questions and answers
# 2. reviews array: text, author
# 3. Text in the JSX:
#    - headers (h1, h2, h3)
#    - paragraphs (p)
#    - list items (li)
#    - table cells (th, td)
#    - spans or buttons with text
# Let's extract all of these.

words_list = []

# FAQs
faq_matches = re.findall(r'question:\s*"([^"]+)"|answer:\s*"([^"]+)"', content)
for match in faq_matches:
    text = match[0] or match[1]
    words_list.extend(text.split())

# Reviews
review_matches = re.findall(r'author:\s*"([^"]+)"|text:\s*"([^"]+)"', content)
for match in review_matches:
    text = match[0] or match[1]
    words_list.extend(text.split())

# JSX visible text
# Let's extract all text content inside JSX tags in the return statement.
# We can find the return statement:
# We'll match text within tags that are not tags themselves.
# A simple regex for text between tags: >([^<]+)<
jsx_matches = re.findall(r'>([^<]+)<', content)
for text in jsx_matches:
    # Skip lines that are just imports, braces, styles, or code-like text
    text_clean = text.strip()
    if not text_clean:
        continue
    # Skip schema script contents
    if "dangerouslySetInnerHTML" in text_clean or "breadcrumbSchema" in text_clean:
        continue
    if "{" in text_clean and "}" in text_clean:
        # This is a dynamic expression, we should evaluate if it refers to faqs, reviews, etc.
        # But wait, we already counted faqs and reviews separately! So we skip JSX expressions referencing reviews or faqs.
        if "review." in text_clean or "faq." in text_clean:
            continue
    words_list.extend(text_clean.split())

# Let's filter out words that are part of JS expressions or syntax if any.
print(f"Total Words Counted: {len(words_list)}")
