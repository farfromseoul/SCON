# CLAUDE.md — SCON (카드 혜택 추천 앱)

이 저장소는 iPhone용 “카드 혜택 추천 앱”의 기획 산출물과, 앞으로 만들 앱 코드를 담는다.
Claude Code는 이 파일을 먼저 읽고 작업한다.

## 한 줄 정의

보유한 신용·체크카드 중 지금 결제하는 곳에서 가장 큰 혜택을 주는 카드를, 계산 근거와 함께 정확하게 알려주는 iPhone 앱.

## 현재 단계 (2026-11-08 기준)

- 기획 1단계(서비스 정의) 산출물 초안 완료: `docs/01-service-overview.md`
- 화면 시안(HTML 목업) 3개 시나리오·13개 화면: `design/mockups/`
- 소개 슬라이드 7장: `slides/`
- 2단계(요구사항·정책) 완료: `docs/06`~`09`
- 브랜드·업종 사전 초안, 테스트 케이스 양식: `data/`
- **다음 단계: 3단계 데이터 기획** (혜택 스키마, 보유 카드 7장 구조화, 업종 분류·대표 금액, 첫 20장 선정)

## 작업 방식 (기획자의 원칙 — 반드시 지킬 것)

- 개발 전 모든 단계에 기획자가 직접 개입한다. 단계별 산출물을 만들고, 검토·확정받은 뒤 다음 단계로 넘어간다.
- 단계 순서: 1 서비스 정의 → 2 요구사항·정책 → 3 데이터 기획(스키마, 20장 선정) → 4 화면 기획 → 5 디자인 → 6 설계 → 7 개발 계획 → 개발.
- 기획자가 요청하지 않은 단계를 건너뛰어 구현하지 않는다. 단, 기획자가 요청한 “기술 검증(빈 앱을 기기에 설치해보기)”은 병행 가능.
- 확정되지 않은 내용은 결정처럼 쓰지 않는다. `docs/decisions-log.md`의 확정/잠정/미정 구분을 따른다.

## 세션 시작 시 할 일

기획자가 `/session-start`를 실행하거나 새 세션을 열면 아래 순서로 컨텍스트를 맞춘다.

1. 이 파일 전체를 읽는다.
2. `docs/decisions-log.md`에서 확정/제안/미정을 확인한다.
3. `docs/05-process-and-roadmap.md`에서 현재 단계와 다음 할 일을 확인한다.
4. `docs/session-log.md`의 최근 항목 1~2개로 지난 세션이 어디서 끝났는지 확인한다.
5. 요청이 특정 화면·기능에 관한 것이면 `design/README.md`와 해당 docs 문서를 읽는다.
6. 현재 단계, 지난 세션 요약, 오늘 할 일 후보를 3~5줄로 보고하고 기획자의 지시를 기다린다.

## 개발 시 기획 참조 규칙

- **구현 전에 근거 문서를 찾는다.** 기능·화면·정책을 구현할 때 해당 내용이 있는 문서와 항목을 먼저 확인하고, 작업 설명에 근거 문서를 적는다.
- **문서에 없거나 미정이면 추측해서 구현하지 않는다.** `decisions-log.md`에서 “미정”이거나 문서끼리 충돌하면 선택지와 추천을 정리해 기획자에게 묻는다.
- **“제안”은 확정이 아니다.** 기술 스택처럼 “제안”으로 표시된 항목은 기획자 확인 후 사용한다.
- **결정이 나면 문서에 반영한다.** 대화에서 새로 확정된 내용은 `decisions-log.md`에 날짜와 함께 추가하고, 관련 문서(개요서, 데이터 전략, 로드맵 상태)도 함께 고친다.
- **기획 의도와 다른 구현을 발견하면 알린다.** 원칙(정확도 최우선, 검수 전 데이터 미사용, AI는 추출에만, 계산 근거 표시, 카드번호 미수집)에 어긋나는 코드는 고치기 전에 보고한다.
- **추천 계산은 테스트로 증명한다.** 규칙 엔진은 실제 카드 혜택 예시로 테스트 케이스를 먼저 쓰고 구현한다. 정확도가 이 앱의 핵심이다.
- 문서는 한국어로 쓴다. 코드 식별자는 영어, 주석은 한국어 가능.

## 세션 종료 시 할 일

기획자가 `/session-end`를 실행하면:

1. `docs/session-log.md` 맨 위에 오늘 날짜로 한 일, 확정된 결정, 미해결 질문, 다음 할 일을 추가한다.
2. 새로 확정된 결정을 `decisions-log.md`에, 단계 상태 변화를 `05-process-and-roadmap.md`에 반영한다.
3. 변경을 커밋하고 기획자 확인 후 푸시한다.

## 커밋 규칙

- 커밋 메시지는 한국어로, 첫 줄에 무엇을 바꿨는지 쓴다. 예: `docs: 추천 정책 초안 추가`, `feat: 규칙 엔진 전월실적 구간 계산`
- 접두어: `docs`(기획 문서), `design`(시안), `feat`(기능), `fix`(버그), `test`, `chore`
- API 키, 개인 카드 정보, 결제 내역 같은 민감 정보는 커밋하지 않는다.

## 핵심 원칙 (확정)

1. **정확도 최우선.** 사람이 검수한 데이터만 추천에 쓴다. 검수 전 데이터는 “계산 불가”로 표시한다.
2. **AI는 혜택 추출에만.** 상품설명서 → 구조화 데이터 추출에만 AI를 쓰고, 추천 계산은 규칙 엔진이 한다.
3. **계산 근거를 항상 보여준다.** 1등 카드의 계산식, 다른 카드의 금액과 불가 사유(실적 미달, 한도 소진, 최소금액 미달 등).
4. **카드번호는 받지 않는다.** 카드는 “카드사 + 상품” 선택으로만 등록한다.
5. **신용·체크 동등 지원.** 체크카드 완성도를 강점으로 삼는다.

## 기술 방향 (제안, 6단계에서 확정)

- 앱: Swift + SwiftUI (잠금화면 위젯·Live Activity·단축어가 차별점이라 네이티브), 로컬 저장 SwiftData
- 위치: MapKit 또는 카카오 로컬 API (둘 다 초기 테스트 후 결정)
- 데이터 파이프라인: Python(수집 → AI 추출 → 규칙 검증) + DB + 웹 관리자 검수 화면
- 배포: 처음엔 무료 Apple ID로 본인 기기 설치(7일 만료), 지인 테스트 단계에서 Apple Developer Program($99/년) 가입 후 TestFlight

## 저장소 구조

```
CLAUDE.md                     이 파일 (Claude Code용 컨텍스트)
SESSION_START.md              새 세션을 열 때 기획자가 붙여넣는 시작 요청문
README.md                     저장소 안내
.claude/commands/             세션 시작·종료·기획 확인용 슬래시 명령
docs/
  01-service-overview.md      1단계 서비스 개요서
  02-market-research.md       경쟁·유사 서비스 분석
  03-scenarios-and-features.md  사용 시나리오, 기능 목록, 엣지케이스
  04-data-strategy.md         혜택 데이터 확보·검수·전월 실적 처리
  05-process-and-roadmap.md   단계별 산출물, 카드 확대, 배포 계획
  06-recommendation-policy.md 추천 계산 정책 (2단계 확정)
  07-performance-limit-policy.md 실적·한도 정책
  08-exception-policy.md      예외 처리 정책
  09-core-flow.md             핵심 플로우
  10-in-app-faq.md            앱 내 FAQ
  decisions-log.md            결정 기록 (확정/제안/미정)
  session-log.md              세션별 인수인계 기록 (최신이 위)
data/
  brand-dictionary.csv        브랜드·업종 사전 (초안)
  test-case-template.csv      정확도 테스트 케이스 양식
project-context/
  project-instructions.md     claude.ai 프로젝트 설명
  memory-card-benefit-app.md  Claude 메모리에 쌓인 프로젝트 사실
design/
  README.md                   시안 설명, 화면 목록
  mockups/                    화면 시안(.dc.html) + canvas.json, Proto.dc.html(인터랙티브 프로토타입)
  prototype/                  프로토타입 계산·화면 로직(참고용)
slides/
  README.md                   소개 슬라이드 설명
  deck.json, slides/*.html    슬라이드 원본
```

## 참고 링크 (claude.ai 아티팩트, 기획자 계정에서만 열림)

- 서비스 개요서(편집본): https://claude.ai/artifact/FjuinV1xiUivpAwRpNGuZW
- 화면 시안 캔버스: https://claude.ai/artifact/3jAJiU2GNC6APbsEh15ppH
- 소개 슬라이드: https://claude.ai/artifact/T7MTWBHhy76QdsdrKFRZrZ
