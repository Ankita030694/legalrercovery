import urllib.request
from html.parser import HTMLParser

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            for k, v in attrs:
                if k == 'href' and v and v.startswith('http') and 'legalrecovery.in' not in v:
                    self.links.append(v)

url = 'http://localhost:3000/send-a-legal-notice/recover-gratuity-from-employer-legal-notice'
html = urllib.request.urlopen(url).read().decode('utf-8')
p = LinkParser()
p.feed(html)

print(f'Total external <a> tags in HTML: {len(p.links)}')
for l in p.links:
    print('  -', l)
