import re

filepath = "/Users/piyushmishra/Desktop/LegalRecovery/legalrercovery/src/app/should-rental-agreements-be-notarized-in-india/RentalAgreementNotarizationClient.tsx"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Let's extract specific text fields from arrays
faqs_text = []
faq_matches = re.findall(r'question:\s*"([^"]+)"|answer:\s*"([^"]+)"', content)
for match in faq_matches:
    faqs_text.append(match[0] or match[1])

reviews_text = []
review_matches = re.findall(r'author:\s*"([^"]+)"|text:\s*"([^"]+)"', content)
for match in review_matches:
    reviews_text.append(match[0] or match[1])

# Let's extract text inside JSX tags
# We want: <h1>, <h2>, <h3>, <p>, <li>, <th>, <td>, and button labels
# We'll parse the file line by line to extract lines inside these tags
lines = content.split('\n')
jsx_text = []

in_main_render = False
for line in lines:
    if 'return (' in line:
        in_main_render = True
    if in_main_render:
        # Extract text between JSX tags
        # e.g., <p className="...">text</p>
        # We can find tag contents
        matches = re.findall(r'>([^<{}]+)<', line)
        for m in matches:
            t = m.strip()
            if t and not t.startswith('/') and not t.startswith('*'):
                jsx_text.append(t)

# Combine all visible texts
all_texts = []
all_texts.extend(jsx_text)
all_texts.extend(faqs_text)
all_texts.extend(reviews_text)

# Let's clean and write to a file
with open("/Users/piyushmishra/Desktop/LegalRecovery/legalrercovery/scratch/prose.txt", "w", encoding='utf-8') as out:
    for text in all_texts:
        out.write(text + "\n")

all_words = []
for text in all_texts:
    # Clean special characters but keep words
    words = re.findall(r'\b\w+\b', text.lower())
    all_words.extend(words)

print(f"Total Words Counted: {len(all_words)}")
