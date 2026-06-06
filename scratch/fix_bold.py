import os
import re

directory = "lr/src/app/recovery"

# Find all files with **
files_to_process = []
for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith("Client.tsx"):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            if "**" in content:
                files_to_process.append(path)

print(f"Found {len(files_to_process)} files to process.")

for path in files_to_process:
    with open(path, "r", encoding="utf-8") as f:
        original = f.read()
    
    # Replace **text** with <strong>text</strong>
    modified = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', original)
    
    # Check if there are any remaining single double-asterisks (e.g. mismatched)
    remaining = re.findall(r'\*\*', modified)
    if remaining:
        print(f"WARNING: {path} has {len(remaining)} remaining double-asterisks.")
        
    with open(path, "w", encoding="utf-8") as f:
        f.write(modified)
    print(f"Processed {path}")
