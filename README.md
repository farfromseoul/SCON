# SCON

Be Cherry Picker, Useful APP for Smart Consumer and Life, Save your Money!

결제 직전 3초, 내 신용·체크카드 중 지금 여기서 가장 큰 혜택을 주는 카드를 계산 근거와 함께 알려주는 iPhone 앱.

현재 **기획 단계**다. 코드는 아직 없고, 단계별 기획 산출물을 이 저장소에 쌓아간다. 개발은 이 저장소를 Claude Code에 연결해 진행한다.

## 문서

| 문서 | 내용 | 상태 |
| --- | --- | --- |
| [CLAUDE.md](CLAUDE.md) | 프로젝트 전체 컨텍스트와 작업 원칙 (Claude Code가 먼저 읽는 파일) | 최신 |
| [docs/01-service-overview.md](docs/01-service-overview.md) | 서비스 개요서: 컨셉, 문제, 타깃, 경쟁 요약, 차별점, MVP 범위, 성공 기준, 리스크 | 1단계 초안 |
| [docs/02-market-research.md](docs/02-market-research.md) | 카드고릴라·스사사·뱅크샐러드·토스·카드피커·CardPointers·MaxRewards 분석 | 참고 |
| [docs/03-scenarios-and-features.md](docs/03-scenarios-and-features.md) | 사용자 유형, 시나리오(A~D), 기능 영역, 엣지케이스 | 참고 |
| [docs/04-data-strategy.md](docs/04-data-strategy.md) | 혜택 데이터 출처, 수집→추출→검수→게시, 커버리지, 전월 실적, 정확도 측정 | 확정 반영 |
| [docs/05-process-and-roadmap.md](docs/05-process-and-roadmap.md) | 기획~개발 단계별 산출물, 배포 계획 | 최신 |
| [docs/06-recommendation-policy.md](docs/06-recommendation-policy.md) | 추천 계산 정책 (비교 단위, 금액 미입력, 한도, 동률, 합산, 모드, 전용 카드, 표시, 간편결제) | 2단계 확정 |
| [docs/decisions-log.md](docs/decisions-log.md) | 결정 기록 (확정/제안/미정) | 최신 |
| [docs/session-log.md](docs/session-log.md) | 세션별 인수인계 기록 | 최신 |
| [SESSION_START.md](SESSION_START.md) | Claude Code 새 세션 시작 방법과 명령 | 최신 |
| [project-context/](project-context/) | claude.ai 프로젝트 설명과 메모리 | 참고 |
| [design/](design/README.md) | 화면 시안 13개 (3개 시나리오) | 초안 |
| [slides/](slides/README.md) | 소개 슬라이드 7장 | 초안 |

## 진행 단계

1. 서비스 정의 — 초안 완료
2. 요구사항·정책 정의 — **다음**
3. 데이터 기획 (스키마, 첫 20장)
4. 화면 기획
5. 디자인
6. 설계
7. 개발 계획 → 개발 → 본인 사용 → TestFlight
