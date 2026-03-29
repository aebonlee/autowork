const lesson = {
  titleKo: 'Python 환경 설정',
  titleEn: 'Python Environment Setup',
  contentKo: `## Python 설치 및 개발 환경 구성

### 1. Python 설치
- [python.org](https://python.org)에서 최신 버전 다운로드
- 설치 시 **"Add Python to PATH"** 반드시 체크
- 설치 확인:

\`\`\`python
python --version
pip --version
\`\`\`

### 2. VS Code 설정
- VS Code 설치 후 **Python 확장** 설치
- \`Ctrl+Shift+P\` > "Python: Select Interpreter"로 인터프리터 선택
- 추천 확장: Pylance, Python Debugger, autoDocstring

### 3. pip 패키지 관리
- 패키지 설치: \`pip install 패키지명\`
- 설치 목록 확인: \`pip list\`
- 요구사항 파일 생성: \`pip freeze > requirements.txt\`

\`\`\`python
# 패키지 일괄 설치
pip install -r requirements.txt
\`\`\`

### 4. 가상 환경 (venv)
프로젝트별 독립 환경을 만들어 패키지 충돌을 방지합니다.

\`\`\`python
# 가상 환경 생성
python -m venv myenv

# 활성화 (Windows)
myenv\\Scripts\\activate

# 활성화 (Mac/Linux)
source myenv/bin/activate

# 비활성화
deactivate
\`\`\`

- 프로젝트마다 가상 환경을 만드는 것이 **베스트 프랙티스**입니다.`,
  contentEn: `## Installing Python & Setting Up Your Dev Environment

### 1. Install Python
- Download the latest version from [python.org](https://python.org)
- **Check "Add Python to PATH"** during installation
- Verify installation:

\`\`\`python
python --version
pip --version
\`\`\`

### 2. VS Code Setup
- Install VS Code, then install the **Python extension**
- \`Ctrl+Shift+P\` > "Python: Select Interpreter"
- Recommended extensions: Pylance, Python Debugger, autoDocstring

### 3. pip Package Management
- Install packages: \`pip install package_name\`
- List installed: \`pip list\`
- Export dependencies: \`pip freeze > requirements.txt\`

\`\`\`python
# Batch install from file
pip install -r requirements.txt
\`\`\`

### 4. Virtual Environments (venv)
Create isolated environments per project to avoid package conflicts.

\`\`\`python
# Create virtual environment
python -m venv myenv

# Activate (Windows)
myenv\\Scripts\\activate

# Activate (Mac/Linux)
source myenv/bin/activate

# Deactivate
deactivate
\`\`\`

- Creating a virtual environment per project is a **best practice**.`,
};

export default lesson;
