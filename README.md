# 이세계 소환사 — 메인 허브

Manus 원본에서 **타이틀 화면과 20개 작품 선택 화면만** 보존한 독립 React/Vite 프로젝트입니다. 슬램덩크·요리왕 비룡·다다다의 프로토타입 게임 로직과 관련 에셋은 포함하지 않았습니다. 모든 작품은 현재 준비 중 상태입니다.

## 실행

```bash
npm install
npm run dev
```

## 신규 게임 연결

`src/data/animeWorlds.ts`에서 작품 정보를 관리합니다. 게임 구현 후 해당 작품의 `status`를 `available`로 변경하고, `src/contexts/GameContext.tsx`의 `startAnime`을 해당 게임 라우트로 연결하세요. 지금은 준비 중 모달을 띄웁니다.

원본에서 제공된 애니메이션 커버 및 메인 배너 이미지는 포함되어 있습니다. 공개 배포 전 이미지 사용 권리를 확인하세요.

## 프로젝트 파일 구성

- `src/components/game/TitleScreen.tsx`: 메인 타이틀
- `src/components/game/WorldSelectScreen.tsx`: 20개 작품 선택
- `src/data/animeWorlds.ts`: 작품 목록과 공개 상태
- `src/contexts/GameContext.tsx`: 메인/작품 선택 전환 및 준비 중 안내

기존 게임(슬램덩크, 요리왕 비룡, 다다다) 플레이 로직은 포함되지 않습니다. 작품 표지들은 웹용 WebP로 최적화했습니다.
