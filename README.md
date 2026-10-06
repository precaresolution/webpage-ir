# ir 홈페이지

pcsc.co.kr IR 홈페이지를 Next.js 로 다시 만드는 저장소입니다. 현재는 뼈대만 있고, 섹션별 컴포넌트는 placeholder 상태입니다. 각 파일 상단의 TODO 주석을 보고 구현하면 됩니다.

## 실행

```bash
npm install
cp .env.example .env.local
npm run dev
```

http://localhost:3000 에서 확인합니다.

## 구조

```
src/
  app/
    layout.tsx      # 공통 레이아웃 (Header, Footer 포함)
    page.tsx        # 메인 페이지. 섹션 컴포넌트를 순서대로 조합
    globals.css     # Tailwind 진입점
  components/
    Header.tsx      # 상단 네비게이션 (앵커 링크)
    Hero.tsx        # 최상단 배너
    Company.tsx     # #company
    History.tsx     # #history
    Solutions.tsx   # #solutions
    Greeting.tsx    # #greeting
    Contact.tsx     # #contact
    Footer.tsx      # 하단 사업자 정보
  content/
    site.ts         # 네비게이션 항목, 연락처 등 공통 데이터
```

## 스택

- Next.js 16 (App Router) / React 19 / TypeScript
- Tailwind CSS v4

## 배포

Vercel 에서 이 저장소를 Import 하면 추가 설정 없이 Next.js 로 인식해 배포됩니다.
