<p align="center">
  <img src="/public/thumbnail.png" alt="Thumbnail" width="800">
</p>

# 쀼메이트 👰🏻🤵🏻

“신혼부부 챗봇 상담 서비스”는 결혼 후 주거·대출·복지·기업 혜택 지원 등 **각 기관에 흩어진 정보를 RAG 기반으로 통합하여, 사용자의 상황에 맞는 정책을 추천해주는 AI 상담 플랫폼**입니다.

## 🎧 핵심 기능

- 온보딩: 거주 지역, 주거 형태(무주택/전세/월세/자가/기타) 선택 후 맞춤 상담 시작
- 채팅: 백엔드 API와 통신해 RAG 기반 답변을 수신하고, 자동 스크롤로 최신 메시지를 노출
- 출처 표시: 백엔드가 제공한 sources를 링크로 화면에 표시
- 일관된 디자인 토큰: 버튼/아이콘/말풍선 색상을 CSS 변수로 관리

---

## ⚒️ 기술 스택

- React 18 + TypeScript 5
- Vite 5
- Tailwind CSS + shadcn/ui
- ESLint 9

---

## ✨ 실행 방법

1. 레포지토리 클론

   ```bash
   git clone <YOUR_REPO_URL>
   cd couple-navi
   ```

2. 필수 Node.js 사용

   프로젝트 루트의 `.nvmrc`에 지정된 Node 22 권장

- nvm 사용 시

  ```bash
  nvm use        # .nvmrc 기반 Node버전 사용
  ```

- nvm이 없는 경우

  - Node.js 공식 사이트에서 LTS(22) 설치: `https://nodejs.org`

  - 또는 터미널에서 설치 (macOS Homebrew)

    ```bash
    brew install node@22
    brew link node@22 --force
    ```

- nvm 설치할 경우 (macOS 예)

  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  # 터미널 재시작 후
  nvm install 22
  ```

- 노드 버전 확인

  ```bash
  node -v        # 22
  ```

- 의존성 설치 및 실행

  ```bash
  npm install    # 의존성 설치
  npm run dev    # 개발 서버 실행
  ```

---

## 💻 환경변수 설정

백엔드 API 주소를 바꾸려면(선택): 프로젝트 루트 `.env`에 설정

```bash
VITE_API_BASE=FRONTEND_API_BASE_URL
```
