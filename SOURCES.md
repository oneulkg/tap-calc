# 탭 조건 계산기 — 출처 노트
- 나사 피치(보통/가는): ISO 261 / KS B 0201 미터나사 표준 피치.
- 절삭탭 기리: 보통나사는 JIS B 1004 / ISO 2306 계열 표에서 흔히 쓰는 값(M8=6.8, M12=10.2 등). 가는나사는 일반식 D−P.
- 롤(전조)탭 기리: 근사식 D − P/2. 메이커별 권장값이 조금씩 다르므로(예: OSG, YAMAWA 전조탭 하공경 표) 반드시 메이커 표 확인. 앱에 "(약)" 표기.
- Vc (m/min):
  - 스파이럴(A-SFT), 포인트(A-POT): OSG A-Tap 전단지 n_102 "切削条件基準表" (수용성 절삭유 기준) https://www.osg.co.jp/en/media_dl/flier/file/n_102.pdf — 표의 전체 범위(추천+가능 영역)를 그대로 표시. SCM은 A-SFT 5–15, A-POT 5–30 등.
  - 롤탭: OSG USA "A Brand & Premium Tooling Recommendation Guide Vol.4" A-XPF/S-XPF SFM 값을 m/min로 환산 (탄소강 50–115 SFM≈15–35, 스테인리스 15–75≈5–23, 알루미늄 65–115≈20–35, 합금강 50–85≈15–26). 주철은 전조탭 항목 없음 → "비권장" 표시. https://res.cloudinary.com/osg-usa-inc/image/upload/v1783606969/Literature/03%20-%20Charts%20and%20Guides/A_Brand_Recommendation_Guide_-_Vol_4.pdf
  - 주의: 첫 번째 OSG 표는 "가능 영역"도 함께 표시되어 범위가 넓음. 기본 시작값(범위 하위 1/3)은 앱이 정한 보수적 시작점이지 메이커 값이 아님.
- 계산식: S = Vc×1000/(π×D), F = S×P (mm/min, G94 기준 동기 탭핑).

## 2026-10-27 업데이트 (기본 재질 4종)
- 기본 재질: SS41(SS400), S45C, SCM(SCM440, 비조질 가정), SKD(SKD11 소둔).
- SS400/S45C/SCM은 위 OSG A-Tap 표(SS400, S45C, SCM 행)와 XPF 롤탭 값을 그대로 씀.
- SKD11: OSG 두 자료 모두 SKD11 행이 따로 없음. 소둔 SKD11(JIS 기준 ≤255HB, 대략 HRC25 이하)을 가정하고, OSG USA Guide Vol.4의 "Alloy, Tool & Die Steels 30-40 HRC" 행을 보수적으로 적용: 절삭탭 VC-10 15–30 SFM ≈ 5–9 m/min, 롤탭 A/S-XPF 8–25 SFM ≈ 2–8 m/min. 소둔재엔 더 빠를 수도 있지만 고탄소·고크롬이라 마모가 커서 낮은 쪽 채택. 실제 메이커 SKD 전용 조건으로 바꿔 쓰길 권장.
- 탭 종류: 스파이럴탭, 롤/전조탭 기본 + 포인트탭(추가).
