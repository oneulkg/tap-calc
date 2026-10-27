// ISO 261 metric threads (coarse + common fine pitches)
const THREADS = [
 [2,0.4,[0.25]],[2.5,0.45,[0.35]],[3,0.5,[0.35]],[4,0.7,[0.5]],[5,0.8,[0.5]],[6,1.0,[0.75]],
 [8,1.25,[1.0,0.75]],[10,1.5,[1.25,1.0,0.75]],[12,1.75,[1.5,1.25,1.0]],[14,2.0,[1.5,1.25,1.0]],
 [16,2.0,[1.5,1.0]],[18,2.5,[2.0,1.5,1.0]],[20,2.5,[2.0,1.5,1.0]],[22,2.5,[2.0,1.5,1.0]],[24,3.0,[2.0,1.5,1.0]]
];
// Vc ranges m/min from OSG A-Tap flier n_102 (A-SFT spiral, A-POT point) and OSG USA A Brand guide Vol.4 (A-XPF/S-XPF forming, SFM->m/min)
const MATS = {
 ss400:{name:"SS41 (SS400) 일반구조용강", spiral:[5,20], point:[5,50], roll:[15,35]},
 s45c:{name:"S45C 중탄소강", spiral:[5,50], point:[5,50], roll:[15,35]},
 scm: {name:"SCM (SCM440) 합금강, 비조질", spiral:[5,15], point:[5,30], roll:[15,26]},
 skd: {name:"SKD (SKD11) 소둔재 ≤255HB", spiral:[5,9], point:[5,9], roll:[2,8], note:"SKD11 소둔(약 255HB 이하, ≈HRC25 이하) 가정. OSG 표의 '공구강 30–40HRC' 행을 보수적으로 사용. 열처리(경화) 후엔 이 값 쓰지 마세요."},
 al:  {name:"(추가) 알루미늄", spiral:[5,50], point:[5,50], roll:[20,35]},
 sus: {name:"(추가) SUS304", spiral:[5,10], point:[5,15], roll:[5,23]},
 fcd: {name:"(추가) 주철 FCD", spiral:[5,50], point:[5,50], roll:null}
};
const TYPES = {spiral:"스파이럴탭 (절삭)", roll:"롤탭 / 전조탭", point:"(추가) 포인트탭"};
// Commonly listed tap drill for coarse threads (JIS B 1004 / ISO 2306 tables)
const STD_DRILL={2:1.6,2.5:2.1,3:2.5,4:3.3,5:4.2,6:5.0,8:6.8,10:8.5,12:10.2,14:12.0,16:14.0,18:15.5,20:17.5,22:19.5,24:21.0};
