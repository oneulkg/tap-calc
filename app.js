const $=s=>document.querySelector(s);
const r2=x=>Math.round(x*100)/100;
function opts(){const o=[];THREADS.forEach(([d,p,f])=>{o.push({d,p,label:`M${d} × ${p} (보통)`});f.forEach(q=>o.push({d,p:q,label:`M${d} × ${q} (가는)`}))});return o}
const OPTS=opts();
function calc(d,p,vc){const rpm=vc*1000/(Math.PI*d);return {rpm:Math.round(rpm),f:Math.round(Math.round(rpm)*p*10)/10}}
function key(i,m,t){return `tap:${OPTS[i].d}x${OPTS[i].p}:${m}:${t}`}
function load(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}}
function render(){
 const i=+$('#size').value,o=OPTS[i],m=$('#mat').value,t=$('#type').value,M=MATS[m];$('#dlabel').textContent=t==='roll'?'→ 롤탭 기리 사용: Ø '+r2(o.d-o.p/2)+' (약)':'→ 절삭탭 기리 사용';
 $('#pitch').textContent=o.p+' mm';
 const isC=THREADS.some(t=>t[0]===o.d&&t[1]===o.p);$('#cutdrill').textContent='Ø '+(isC&&STD_DRILL[o.d]?STD_DRILL[o.d]:r2(o.d-o.p));
 $('#rolldrill').textContent='Ø '+r2(o.d-o.p/2)+' (약)';
 const rng=M[t];
 if(!rng){$('#vcrange').textContent='추천 없음 (주철은 롤탭 비권장)';$('#out').hidden=true;return}
 $('#out').hidden=false;
 $('#vcrange').textContent=`${rng[0]}–${rng[1]} m/min`;$('#mnote').textContent=M.note||'';
 const saved=load(key(i,m,t));
 const vc=saved?saved.vc:Math.round(rng[0]+(rng[1]-rng[0])/3);
 if(document.activeElement!==$('#vc')) $('#vc').value=vc;
 const v=+$('#vc').value||vc;
 const c=calc(o.d,o.p,v);
 const S=saved&&saved.s?saved.s:c.rpm, F=saved&&saved.s?Math.round(saved.s*o.p*10)/10:c.f;
 $('#rpm').textContent=S; $('#feed').textContent=F;
 $('#src').textContent=saved?'★ 내가 저장한 값':'기본값 (OSG 범위 하위 1/3에서 시작)';
 $('#g84').textContent=`G84 X0. Y0. Z-15. R3. F${F} S${S} (깊이·R은 예시)`;
 $('#rpmIn').value=saved&&saved.s?saved.s:'';
}
function init(){
 $('#size').innerHTML=OPTS.map((o,i)=>`<option value="${i}">${o.label}</option>`).join('');
 $('#size').value=OPTS.findIndex(o=>o.d===8&&o.p===1.25);
 $('#mat').innerHTML=Object.entries(MATS).map(([k,v])=>`<option value="${k}">${v.name}</option>`).join('');
 $('#type').innerHTML=Object.entries(TYPES).map(([k,v])=>`<option value="${k}">${v}</option>`).join('');
 ['#size','#mat','#type'].forEach(s=>$(s).onchange=()=>{$('#vc').blur();render()});
 $('#vc').oninput=render;
 $('#save').onclick=()=>{const i=+$('#size').value;const s=+$('#rpmIn').value||null;localStorage.setItem(key(i,$('#mat').value,$('#type').value),JSON.stringify({vc:+$('#vc').value,s}));render();$('#msg').textContent='저장했어요'};
 $('#reset').onclick=()=>{localStorage.removeItem(key(+$('#size').value,$('#mat').value,$('#type').value));$('#vc').value='';render();$('#msg').textContent='기본값으로 돌렸어요'};
 render();
 if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
}
if(typeof module!=='undefined') module.exports={calc}; else init();
