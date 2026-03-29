const lesson = {
  titleKo: '이메일 자동화',
  titleEn: 'Email Automation',
  contentKo: `## Python 이메일 자동 발송

### 1. 기본 이메일 보내기 (smtplib)

\`\`\`python
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

smtp_server = "smtp.gmail.com"
port = 587
sender = "your_email@gmail.com"
password = "앱_비밀번호"  # Gmail 앱 비밀번호 사용

msg = MIMEMultipart()
msg["From"] = sender
msg["To"] = "recipient@example.com"
msg["Subject"] = "자동 발송 테스트"

body = "안녕하세요, Python으로 보낸 이메일입니다."
msg.attach(MIMEText(body, "plain", "utf-8"))

with smtplib.SMTP(smtp_server, port) as server:
    server.starttls()
    server.login(sender, password)
    server.send_message(msg)
    print("이메일 발송 완료!")
\`\`\`

### 2. HTML 이메일 템플릿

\`\`\`python
html_template = """
<html>
<body>
    <h2>안녕하세요, {name}님!</h2>
    <p>{message}</p>
    <p style="color: gray;">본 메일은 자동 발송됩니다.</p>
</body>
</html>
"""

html_body = html_template.format(
    name="홍길동",
    message="이번 달 보고서를 첨부합니다."
)
msg.attach(MIMEText(html_body, "html", "utf-8"))
\`\`\`

### 3. 파일 첨부

\`\`\`python
from email.mime.base import MIMEBase
from email import encoders

filename = "report.pdf"
with open(filename, "rb") as f:
    attachment = MIMEBase("application", "octet-stream")
    attachment.set_payload(f.read())

encoders.encode_base64(attachment)
attachment.add_header(
    "Content-Disposition", f"attachment; filename={filename}"
)
msg.attach(attachment)
\`\`\`

### 4. 대량 이메일 발송

\`\`\`python
import csv
import time

with open("contacts.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        send_email(row["email"], row["name"])
        time.sleep(2)  # 스팸 방지 딜레이
\`\`\`

- **보안 팁**: 비밀번호는 환경 변수(\`os.environ\`)로 관리하세요.
- Gmail은 **앱 비밀번호** 설정이 필요합니다.`,
  contentEn: `## Automated Email Sending with Python

### 1. Send Basic Email (smtplib)

\`\`\`python
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

smtp_server = "smtp.gmail.com"
port = 587
sender = "your_email@gmail.com"
password = "app_password"  # Use Gmail App Password

msg = MIMEMultipart()
msg["From"] = sender
msg["To"] = "recipient@example.com"
msg["Subject"] = "Automated Email Test"

body = "Hello, this email was sent with Python."
msg.attach(MIMEText(body, "plain", "utf-8"))

with smtplib.SMTP(smtp_server, port) as server:
    server.starttls()
    server.login(sender, password)
    server.send_message(msg)
    print("Email sent successfully!")
\`\`\`

### 2. HTML Email Templates

\`\`\`python
html_template = """
<html>
<body>
    <h2>Hello, {name}!</h2>
    <p>{message}</p>
    <p style="color: gray;">This is an automated message.</p>
</body>
</html>
"""

html_body = html_template.format(
    name="John",
    message="Please find the monthly report attached."
)
msg.attach(MIMEText(html_body, "html", "utf-8"))
\`\`\`

### 3. Attachments

\`\`\`python
from email.mime.base import MIMEBase
from email import encoders

filename = "report.pdf"
with open(filename, "rb") as f:
    attachment = MIMEBase("application", "octet-stream")
    attachment.set_payload(f.read())

encoders.encode_base64(attachment)
attachment.add_header(
    "Content-Disposition", f"attachment; filename={filename}"
)
msg.attach(attachment)
\`\`\`

### 4. Bulk Email Sending

\`\`\`python
import csv
import time

with open("contacts.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        send_email(row["email"], row["name"])
        time.sleep(2)  # Delay to avoid spam filters
\`\`\`

- **Security tip**: Store passwords in environment variables (\`os.environ\`).
- Gmail requires an **App Password** to be configured.`,
};

export default lesson;
