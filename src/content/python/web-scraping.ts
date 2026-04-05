const lesson = {
  titleKo: '웹 스크래핑 기초',
  titleEn: 'Web Scraping Basics',
  contentKo: `## Python 웹 스크래핑 입문

### 1. 필요 라이브러리 설치

\`\`\`python
pip install requests beautifulsoup4
\`\`\`

### 2. 기본 웹 페이지 가져오기

\`\`\`python
import requests
from bs4 import BeautifulSoup

url = "https://example.com"
response = requests.get(url)
response.encoding = "utf-8"

soup = BeautifulSoup(response.text, "html.parser")
print(soup.title.string)
\`\`\`

### 3. CSS 선택자로 데이터 추출
- \`soup.select("태그")\`: 모든 일치 요소 리스트
- \`soup.select_one(".클래스")\`: 첫 번째 일치 요소
- \`soup.select("div > p.intro")\`: 자식 선택자 활용

\`\`\`python
# 모든 링크 추출
links = soup.select("a[href]")
for link in links:
    print(link["href"], link.get_text(strip=True))

# 특정 클래스의 요소
items = soup.select("div.product .title")
for item in items:
    print(item.text.strip())
\`\`\`

### 4. 페이지네이션 처리

\`\`\`python
import time

base_url = "https://example.com/list?page="
all_data = []

for page in range(1, 11):
    resp = requests.get(f"{base_url}{page}")
    soup = BeautifulSoup(resp.text, "html.parser")

    items = soup.select(".item-title")
    for item in items:
        all_data.append(item.text.strip())

    time.sleep(1)  # 서버 부하 방지

print(f"총 {len(all_data)}건 수집 완료")
\`\`\`

- **주의사항**: robots.txt 확인, 요청 간격 유지, 저작권 준수
- 동적 페이지는 \`selenium\` 또는 \`playwright\` 사용을 권장합니다.`,
  contentEn: `## Introduction to Web Scraping with Python

### 1. Install Required Libraries

\`\`\`python
pip install requests beautifulsoup4
\`\`\`

### 2. Fetch a Web Page

\`\`\`python
import requests
from bs4 import BeautifulSoup

url = "https://example.com"
response = requests.get(url)
response.encoding = "utf-8"

soup = BeautifulSoup(response.text, "html.parser")
print(soup.title.string)
\`\`\`

### 3. Extract Data with CSS Selectors
- \`soup.select("tag")\`: list of all matching elements
- \`soup.select_one(".class")\`: first matching element
- \`soup.select("div > p.intro")\`: child selector

\`\`\`python
# Extract all links
links = soup.select("a[href]")
for link in links:
    print(link["href"], link.get_text(strip=True))

# Elements by class
items = soup.select("div.product .title")
for item in items:
    print(item.text.strip())
\`\`\`

### 4. Handling Pagination

\`\`\`python
import time

base_url = "https://example.com/list?page="
all_data = []

for page in range(1, 11):
    resp = requests.get(f"{base_url}{page}")
    soup = BeautifulSoup(resp.text, "html.parser")

    items = soup.select(".item-title")
    for item in items:
        all_data.append(item.text.strip())

    time.sleep(1)  # Be polite to the server

print(f"Collected {len(all_data)} items total")
\`\`\`

- **Important**: Check robots.txt, add delays between requests, respect copyright.
- For dynamic pages, consider \`selenium\` or \`playwright\`.`,
};

export default lesson;
