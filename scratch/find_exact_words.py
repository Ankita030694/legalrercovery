import re

# Let's import prose blocks from build_component
import sys
sys.path.append("/Users/piyushmishra/Desktop/LegalRecovery/legalrercovery/scratch")
from build_component import prose_blocks, clean_tag_text

for i, block in enumerate(prose_blocks):
    clean = clean_tag_text(block)
    print(f"Block {i}: {len(clean.split())} words | {block[:60]}...")
