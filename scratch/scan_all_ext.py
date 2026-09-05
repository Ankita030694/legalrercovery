import os
import re

base_dir = 'src/app'
results = []
for root, dirs, files in os.walk(base_dir):
    for f in files:
        if f.endswith('.tsx'):
            fpath = os.path.join(root, f)
            content = open(fpath).read()
            matches = re.findall(r'href=[{\"\']\s*[`\"\']?(https?://[^\"\'`}\s]+)', content)
            ext = [m for m in matches if 'legalrecovery.in' not in m]
            if len(ext) > 0:
                rel_path = os.path.relpath(fpath, base_dir)
                results.append((len(ext), rel_path, ext))

results.sort(reverse=True)
for count, rel_path, ext in results[:35]:
    print(f"{count:2d} links in {rel_path}")
