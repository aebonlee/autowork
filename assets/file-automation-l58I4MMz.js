const e={titleKo:"파일/폴더 자동 관리",titleEn:"File & Folder Automation",contentKo:`## 파일과 폴더를 Python으로 자동 관리하기

### 1. 핵심 모듈 소개
- **os**: 운영체제 기능 (경로, 디렉토리 생성/삭제)
- **shutil**: 고수준 파일 작업 (복사, 이동, 압축)
- **pathlib**: 객체 지향 경로 처리 (Python 3.4+, 추천)

### 2. 파일 일괄 이름 변경

\`\`\`python
from pathlib import Path

folder = Path("./documents")
for i, file in enumerate(folder.glob("*.txt"), 1):
    new_name = f"report_{i:03d}.txt"
    file.rename(folder / new_name)
    print(f"{file.name} -> {new_name}")
\`\`\`

### 3. 확장자별 파일 정리

\`\`\`python
import shutil
from pathlib import Path

source = Path("./Downloads")
categories = {
    "images": [".jpg", ".png", ".gif"],
    "documents": [".pdf", ".docx", ".xlsx"],
    "videos": [".mp4", ".avi", ".mov"],
}

for file in source.iterdir():
    if file.is_file():
        for folder, exts in categories.items():
            if file.suffix.lower() in exts:
                dest = source / folder
                dest.mkdir(exist_ok=True)
                shutil.move(str(file), str(dest / file.name))
\`\`\`

### 4. 폴더 변경 감시 (watchdog)

\`\`\`python
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import time

class MyHandler(FileSystemEventHandler):
    def on_created(self, event):
        print(f"새 파일 감지: {event.src_path}")

observer = Observer()
observer.schedule(MyHandler(), path="./watch_folder")
observer.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    observer.stop()
observer.join()
\`\`\`

- \`pip install watchdog\`로 설치 후 사용하세요.`,contentEn:`## Automate File & Folder Management with Python

### 1. Core Modules
- **os**: OS-level operations (paths, create/delete directories)
- **shutil**: High-level file operations (copy, move, archive)
- **pathlib**: Object-oriented paths (Python 3.4+, recommended)

### 2. Batch Rename Files

\`\`\`python
from pathlib import Path

folder = Path("./documents")
for i, file in enumerate(folder.glob("*.txt"), 1):
    new_name = f"report_{i:03d}.txt"
    file.rename(folder / new_name)
    print(f"{file.name} -> {new_name}")
\`\`\`

### 3. Organize Files by Extension

\`\`\`python
import shutil
from pathlib import Path

source = Path("./Downloads")
categories = {
    "images": [".jpg", ".png", ".gif"],
    "documents": [".pdf", ".docx", ".xlsx"],
    "videos": [".mp4", ".avi", ".mov"],
}

for file in source.iterdir():
    if file.is_file():
        for folder, exts in categories.items():
            if file.suffix.lower() in exts:
                dest = source / folder
                dest.mkdir(exist_ok=True)
                shutil.move(str(file), str(dest / file.name))
\`\`\`

### 4. Watch Folders for Changes (watchdog)

\`\`\`python
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import time

class MyHandler(FileSystemEventHandler):
    def on_created(self, event):
        print(f"New file detected: {event.src_path}")

observer = Observer()
observer.schedule(MyHandler(), path="./watch_folder")
observer.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    observer.stop()
observer.join()
\`\`\`

- Install with \`pip install watchdog\` before use.`};export{e as default};
