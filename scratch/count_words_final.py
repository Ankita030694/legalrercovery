import re

filepath = "/Users/piyushmishra/Desktop/LegalRecovery/legalrercovery/src/app/should-rental-agreements-be-notarized-in-india/RentalAgreementNotarizationClient.tsx"

with open(filepath, 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Extract FAQs text
faqs_text = []
faq_matches = re.findall(r'question:\s*"([^"]+)"|answer:\s*"([^"]+)"', code)
for match in faq_matches:
    faqs_text.append(match[0] or match[1])

# 2. Extract Reviews text
reviews_text = []
review_matches = re.findall(r'author:\s*"([^"]+)"|text:\s*"([^"]+)"', code)
for match in review_matches:
    reviews_text.append(match[0] or match[1])

# 3. Extract JSX text
# The main return statement starts with "return (" and goes to the end of the file.
# Let's find "return (" after the schemas and state variables.
# We can search for the last occurrence of "return (" which is not the one inside the FAQ map.
# Or, we can search for "return (" that is not preceded by spaces and "return".
# The main return is:
#   return (
#     <>
#       <Script ...
# Let's find the position of:
# return (
#     <>
#       <Script

main_return_pos = code.find('return (\n    <>')
if main_return_pos == -1:
    main_return_pos = code.find('return (\n    <>\n      <Script')

print(f"Main return position: {main_return_pos}")

jsx_block = code[main_return_pos:]
# Strip script tags
jsx_block = re.sub(r'<Script.*?>.*?</Script>', '', jsx_block, flags=re.DOTALL)
# Strip all other JSX tags
cleaned = re.sub(r'<[^>]*>', ' ', jsx_block)
# Strip JS expressions in curly braces
cleaned = re.sub(r'\{[^{}]*\}', ' ', cleaned)

# Split and clean JSX lines
jsx_text = []
for line in cleaned.split('\n'):
    line_clean = line.strip()
    line_clean = line_clean.replace('&quot;', '"').replace('&amp;', '&').replace('&middot;', '·')
    if line_clean:
        # Ignore return statement and export closing
        if line_clean == "return (" or line_clean == ");" or line_clean == "}":
            continue
        jsx_text.append(line_clean)

# Count words
faq_words = sum(len(b.split()) for b in faqs_text)
review_words = sum(len(b.split()) for b in reviews_text)
jsx_words = 0

# Let's write the words list to verify what's counted
words_list = []
for block in jsx_text:
    if block.startswith("className=") or block.startswith("id=") or block.startswith("onClick="):
        continue
    words = block.split()
    jsx_words += len(words)
    words_list.extend(words)

for block in faqs_text:
    words_list.extend(block.split())

for block in reviews_text:
    words_list.extend(block.split())

print(f"FAQ words: {faq_words}")
print(f"Review words: {review_words}")
print(f"JSX words: {jsx_words}")
print(f"Total Words Counted: {len(words_list)}")

# Save the raw text to verify
with open("/Users/piyushmishra/Desktop/LegalRecovery/legalrercovery/scratch/final_words_list.txt", "w", encoding="utf-8") as out:
    for word in words_list:
        out.write(word + "\n")
