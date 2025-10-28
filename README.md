# 쀼메이트 👰🏻🤵🏻
“신혼부부 챗봇 상담 서비스”는 결혼 후 주거·대출·복지·기업 혜택 지원 등 **각 기관에 흩어진 정보를 RAG 기반으로 통합하여, 사용자의 상황에 맞는 정책을 추천해주는 AI 상담 플랫폼**입니다.

## 핵심 기능
- 온보딩: 거주 지역, 주거 형태(무주택/전세/월세/자가/기타) 선택 후 맞춤 상담 시작
- 채팅: 질문 입력 후 자동 스크롤로 최신 메시지가 항상 보이도록 처리
- 일관된 디자인 토큰: 버튼/아이콘/말풍선 색상을 CSS 변수로 관리 (`--button-bg`, `--card-icon`, `--chat-user-bg` 등)
- 404 페이지: `public/notfound.png` 이미지를 사용한 커스텀 안내 화면

---

## 기술 스택
- React 18 + TypeScript 5
- Vite 5 (SWC React 플러그인)
- Tailwind CSS + shadcn/ui
- ESLint 9
- Lucide Icons

필수 Node.js 버전: 프로젝트 루트의 `.nvmrc`에 지정된 Node 22 권장

---

## 실행 방법
사전 준비: Node.js 22 (nvm 사용 권장)

```bash
nvm use        # .nvmrc 기반으로 Node 22 사용
npm install    # 의존성 설치
npm run dev    # 개발 서버 실행 (기본: http://localhost:5173)
```

---

## 디렉터리 개요
- `src/pages/Index.tsx`: 랜딩 페이지(UI, 버튼/카드 아이콘 컬러 변수 적용)
- `src/pages/Chat.tsx`: 채팅 화면(자동 스크롤, 온보딩 결과 바인딩)
- `src/components/OnboardingStep.tsx`: 온보딩(거주 지역/주거 형태 선택, "시작하기" 버튼 색상 일관화)
- `src/components/ChatMessage.tsx`: 채팅 말풍선(유저 배경색 변수 `--chat-user-bg`)
- `src/pages/NotFound.tsx`: 404 페이지(`public/notfound.png` 표시)
- `src/index.css`: 디자인 토큰(CSS 변수) 및 Tailwind 레이어

