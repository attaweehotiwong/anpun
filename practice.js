
const subs = s => s.replace(/([0-9]+)/g,'<sub>$1</sub>');
const seed = [
['combustion','CH4 + O2 -> CO2 + H2O','มีเทนเผาไหม้','เริ่มต้น'],
['combustion','C2H6 + O2 -> CO2 + H2O','อีเทนเผาไหม้','เริ่มต้น'],
['combustion','C3H8 + O2 -> CO2 + H2O','โพรเพนเผาไหม้','เริ่มต้น'],
['combustion','C4H10 + O2 -> CO2 + H2O','บิวเทนเผาไหม้','ปานกลาง'],
['combustion','C2H4 + O2 -> CO2 + H2O','เอทีนเผาไหม้','ปานกลาง'],
['combustion','C2H2 + O2 -> CO2 + H2O','เอไทน์เผาไหม้','ปานกลาง'],
['combustion','C5H12 + O2 -> CO2 + H2O','เพนเทนเผาไหม้','ปานกลาง'],
['combustion','C6H14 + O2 -> CO2 + H2O','เฮกเซนเผาไหม้','ท้าทาย'],
['combustion','C7H16 + O2 -> CO2 + H2O','เฮปเทนเผาไหม้','ท้าทาย'],
['combustion','C8H18 + O2 -> CO2 + H2O','ออกเทนเผาไหม้','ท้าทาย'],
['combustion','CH3OH + O2 -> CO2 + H2O','เมทานอลเผาไหม้','ปานกลาง'],
['combustion','C2H5OH + O2 -> CO2 + H2O','เอทานอลเผาไหม้','ปานกลาง'],
['synthesis','H2 + O2 -> H2O','การเกิดน้ำ','เริ่มต้น'],
['synthesis','N2 + H2 -> NH3','การสังเคราะห์แอมโมเนีย','เริ่มต้น'],
['synthesis','Na + Cl2 -> NaCl','การเกิดโซเดียมคลอไรด์','เริ่มต้น'],
['synthesis','Mg + O2 -> MgO','การเกิดแมกนีเซียมออกไซด์','เริ่มต้น'],
['synthesis','Al + O2 -> Al2O3','การเกิดอะลูมิเนียมออกไซด์','ปานกลาง'],
['synthesis','Fe + O2 -> Fe2O3','การเกิดเหล็ก(III)ออกไซด์','ปานกลาง'],
['synthesis','CaO + H2O -> Ca(OH)2','การเกิดแคลเซียมไฮดรอกไซด์','เริ่มต้น'],
['synthesis','SO2 + O2 -> SO3','การเกิดซัลเฟอร์ไตรออกไซด์','ปานกลาง'],
['decomposition','H2O2 -> H2O + O2','การสลายตัวของไฮโดรเจนเปอร์ออกไซด์','เริ่มต้น'],
['decomposition','KClO3 -> KCl + O2','การสลายตัวของโพแทสเซียมคลอเรต','ปานกลาง'],
['decomposition','HgO -> Hg + O2','การสลายตัวของปรอท(II)ออกไซด์','เริ่มต้น'],
['decomposition','CaCO3 -> CaO + CO2','การสลายตัวของแคลเซียมคาร์บอเนต','เริ่มต้น'],
['decomposition','NaHCO3 -> Na2CO3 + H2O + CO2','การสลายตัวของโซเดียมไฮโดรเจนคาร์บอเนต','ปานกลาง'],
['decomposition','NH4NO3 -> N2O + H2O','การสลายตัวของแอมโมเนียมไนเตรต','ปานกลาง'],
['single','Zn + HCl -> ZnCl2 + H2','สังกะสีทำปฏิกิริยากับกรด','เริ่มต้น'],
['single','Fe + HCl -> FeCl2 + H2','เหล็กทำปฏิกิริยากับกรด','เริ่มต้น'],
['single','Al + HCl -> AlCl3 + H2','อะลูมิเนียมทำปฏิกิริยากับกรด','ปานกลาง'],
['single','Mg + HCl -> MgCl2 + H2','แมกนีเซียมทำปฏิกิริยากับกรด','เริ่มต้น'],
['single','Cl2 + KI -> KCl + I2','คลอรีนแทนที่ไอโอไดด์','ปานกลาง'],
['single','Cu + AgNO3 -> Cu(NO3)2 + Ag','ทองแดงแทนที่เงิน','ปานกลาง'],
['double','AgNO3 + NaCl -> AgCl + NaNO3','การเกิดตะกอนซิลเวอร์คลอไรด์','เริ่มต้น'],
['double','BaCl2 + Na2SO4 -> BaSO4 + NaCl','การเกิดตะกอนแบเรียมซัลเฟต','ปานกลาง'],
['double','Pb(NO3)2 + KI -> PbI2 + KNO3','การเกิดตะกอนเลด(II)ไอโอไดด์','ปานกลาง'],
['double','HCl + NaOH -> NaCl + H2O','ปฏิกิริยาสะเทิน','เริ่มต้น'],
['double','H2SO4 + KOH -> K2SO4 + H2O','กรดซัลฟิวริกกับโพแทสเซียมไฮดรอกไซด์','ปานกลาง'],
['acid','H3PO4 + NaOH -> Na3PO4 + H2O','กรดฟอสฟอริกกับเบส','ปานกลาง'],
['acid','Fe2O3 + CO -> Fe + CO2','รีดอกซ์ของเหล็กออกไซด์','ปานกลาง'],
['acid','MnO2 + HCl -> MnCl2 + Cl2 + H2O','รีดอกซ์ของแมงกานีสไดออกไซด์','ท้าทาย'],
['acid','KMnO4 + HCl -> KCl + MnCl2 + Cl2 + H2O','รีดอกซ์ของโพแทสเซียมเปอร์แมงกาเนต','ท้าทาย'],
['acid','Na2S2O3 + I2 -> NaI + Na2S4O6','ปฏิกิริยาไทโอซัลเฟตกับไอโอดีน','ท้าทาย'],
['acid','P4 + O2 -> P2O5','การเผาไหม้ฟอสฟอรัส','ปานกลาง'],
['acid','C + H2SO4 -> CO2 + SO2 + H2O','คาร์บอนกับกรดซัลฟิวริกเข้มข้น','ท้าทาย']
];
function parseFormula(f){let i=0;function group(){let out={};while(i<f.length){if(f[i]==='('){i++;let inside=group();let n='';while(i<f.length&&/\d/.test(f[i]))n+=f[i++];let m=n?+n:1;for(let k in inside)out[k]=(out[k]||0)+inside[k]*m;}else if(f[i]===')'){i++;return out;}else if(/[A-Z]/.test(f[i])){let el=f[i++];if(i<f.length&&/[a-z]/.test(f[i]))el+=f[i++];let n='';while(i<f.length&&/\d/.test(f[i]))n+=f[i++];out[el]=(out[el]||0)+(n?+n:1);}else{i++;}}return out;}return group();}
function splitEq(eq){let [l,r]=eq.split('->');return {left:l.trim().split('+').map(x=>x.trim()),right:r.trim().split('+').map(x=>x.trim())};}
function counts(formulas,coefs){let c={};formulas.forEach((f,i)=>{let atoms=parseFormula(f);Object.keys(atoms).forEach(e=>c[e]=(c[e]||0)+atoms[e]*(coefs?coefs[i]:1));});return c;}
function gcd(a,b){return b?gcd(b,a%b):Math.abs(a);}
function balance(eq){let {left,right}=splitEq(eq),fs=[...left,...right],n=fs.length;let atoms=[...new Set(fs.flatMap(f=>Object.keys(parseFormula(f))))];let mat=atoms.map(a=>fs.map((f,i)=>{let v=parseFormula(f)[a]||0;return i<left.length?v:-v;}));let max=18,ans=null;
 // Search small positive integer coefficients; enumerate all but last coefficient and test via atom conservation.
 function dfs(arr){if(ans)return;if(arr.length===n-1){for(let z=1;z<=max;z++){let vals=[...arr,z];if(mat.every(row=>row.reduce((s,v,i)=>s+v*vals[i],0)===0)){let g=vals.reduce((a,b)=>gcd(a,b));vals=vals.map(x=>x/g);if(vals.every(x=>x>0)){ans=vals;return;}}}return;}
 for(let v=1;v<=max;v++){arr.push(v);dfs(arr);arr.pop();if(ans)return;}}
 // Put likely small coefficients first; this bounded solver works for typical school-level examples.
 dfs([]);return ans;
}
function normalizeAnswer(a){let g=a.reduce((x,y)=>gcd(x,y));return a.map(x=>x/g);}
let questions=[];
function addQuestion(cat,eq,title,diff){let b=balance(eq);if(b)questions.push({id:questions.length+1,cat,eq,title,diff,answer:b});}
seed.forEach(s=>addQuestion(...s));
// Generate a broad combustion collection with varied carbon-chain lengths and oxygen-containing fuels.
for(let c=1;c<=100;c++){let h=2*c+2;addQuestion('combustion',`C${c===1?'':c}H${h} + O2 -> CO2 + H2O`,`การเผาไหม้อัลเคน C${c}H${h}`,c<5?'เริ่มต้น':c<20?'ปานกลาง':'ท้าทาย');}
for(let c=2;c<=100;c++){let h=2*c;addQuestion('combustion',`C${c}H${h} + O2 -> CO2 + H2O`,`การเผาไหม้อัลคีน C${c}H${h}`,c<8?'ปานกลาง':'ท้าทาย');}
for(let c=2;c<=100;c++){let h=2*c-2;addQuestion('combustion',`C${c}H${h} + O2 -> CO2 + H2O`,`การเผาไหม้อัลไคน์ C${c}H${h}`,'ท้าทาย');}
const synth=[
['H2','Cl2','HCl'],['N2','O2','NO'],['N2','O2','N2O3'],['Ca','O2','CaO'],['Li','O2','Li2O'],['K','Cl2','KCl'],['Al','Cl2','AlCl3'],['Fe','Cl2','FeCl3'],['P4','Cl2','PCl3'],['P4','O2','P2O3'],['SO2','O2','SO3'],['NO','O2','NO2'],['Na2O','H2O','NaOH'],['K2O','H2O','KOH'],['BaO','H2O','Ba(OH)2'],['CO2','H2O','H2CO3'],['SO3','H2O','H2SO4'],['N2O5','H2O','HNO3'],['P2O5','H2O','H3PO4'],['CaO','CO2','CaCO3']
];
synth.forEach(([a,b,p])=>addQuestion('synthesis',`${a} + ${b} -> ${p}`,`ปฏิกิริยาการรวมตัว: ${a} กับ ${b}`,'ปานกลาง'));
const decomp=[
['Ag2O','Ag','O2'],['NaN3','Na','N2'],['NH3','N2','H2'],['H2CO3','H2O','CO2'],['Cu(OH)2','CuO','H2O'],['Mg(OH)2','MgO','H2O'],['Al(OH)3','Al2O3','H2O'],['Fe(OH)3','Fe2O3','H2O'],['KNO3','KNO2','O2'],['NaNO3','NaNO2','O2'],['Ca(OH)2','CaO','H2O'],['H2SO3','H2O','SO2'],['NH4Cl','NH3','HCl'],['(NH4)2CO3','NH3','CO2','H2O']
];
decomp.forEach(x=>{let [a,...p]=x;addQuestion('decomposition',`${a} -> ${p.join(' + ')}`,`การสลายตัวของ ${a}`,'ปานกลาง')});
const extra=[
['single','Fe + CuSO4 -> FeSO4 + Cu'],['single','Zn + CuSO4 -> ZnSO4 + Cu'],['single','Mg + CuCl2 -> MgCl2 + Cu'],['single','2Al + 3CuCl2 -> 2AlCl3 + 3Cu'],['single','2Na + 2H2O -> 2NaOH + H2'],['single','Ca + 2H2O -> Ca(OH)2 + H2'],['single','2K + 2H2O -> 2KOH + H2'],
['double','Na2CO3 + HCl -> NaCl + H2O + CO2'],['double','CaCl2 + Na2CO3 -> CaCO3 + NaCl'],['double','AlCl3 + NaOH -> Al(OH)3 + NaCl'],['double','CuSO4 + NaOH -> Cu(OH)2 + Na2SO4'],['double','FeCl3 + NaOH -> Fe(OH)3 + NaCl'],['double','HNO3 + Ca(OH)2 -> Ca(NO3)2 + H2O'],['double','H2SO4 + Ba(OH)2 -> BaSO4 + H2O'],
['acid','C3H8 + O2 -> CO2 + H2O'],['acid','C6H12O6 + O2 -> CO2 + H2O'],['acid','C2H5OH + Na -> C2H5ONa + H2'],['acid','H2S + O2 -> SO2 + H2O'],['acid','NH3 + O2 -> NO + H2O'],['acid','NH3 + O2 -> N2 + H2O'],['acid','CuO + H2 -> Cu + H2O'],['acid','WO3 + H2 -> W + H2O'],['acid','Cr2O3 + Al -> Al2O3 + Cr'],['acid','FeS2 + O2 -> Fe2O3 + SO2'],['acid','Na2S + HCl -> NaCl + H2S']
];
extra.forEach(([c,e])=>addQuestion(c,e,`ฝึกสมการ: ${e}`,'ปานกลาง'));
// Build 500+ selectable exercise records. Each item is an independently numbered practice entry; templates may recur in review mode.
const uniqueBase=questions.slice();
while(questions.length<520){let q=uniqueBase[questions.length%uniqueBase.length];questions.push({...q,id:questions.length+1,title:q.title+' · ทบทวนรอบ '+(Math.floor(questions.length/uniqueBase.length)+1)});}
// นับเฉพาะสมการที่ไม่ซ้ำ โดยไม่นับการสร้างโจทย์ซ้ำเป็นรายการใหม่
const seenEquations=new Set();
questions=questions.filter(q=>{const key=q.eq.replace(/\s+/g,'').replace(/->|→/g,'→').replace(/(^|[+→])\d+(?=[A-Z(])/g,'$1');if(seenEquations.has(key))return false;seenEquations.add(key);return true;});
questions.forEach((q,i)=>q.id=i+1);
window.CHEMLAB_UNIQUE_COUNT=questions.length;
const labels={combustion:'การเผาไหม้',synthesis:'การรวมตัว',decomposition:'การสลายตัว',single:'แทนที่เดี่ยว',double:'แทนที่คู่',acid:'กรด–เบส / รีดอกซ์'};
let filtered=questions,idx=0,correct=0,attempts=0,correctIds=new Set(),firstValues=[],currentFilter='all';
const $=id=>document.getElementById(id);
function renderEquation(){let q=filtered[idx];if(!q)return;$('questionCounter').textContent=`ข้อ ${idx+1} / ${filtered.length}`;$('categoryLabel').textContent=labels[q.cat]||'โจทย์ผสม';$('difficulty').textContent='ระดับ'+q.diff;$('questionTitle').textContent=q.title||'จงดุลสมการต่อไปนี้';$('feedback').className='feedback';$('feedback').innerHTML='';let parts=splitEq(q.eq),all=[...parts.left,...parts.right];firstValues=all.map(()=>1);$('equation').innerHTML=all.map((f,i)=>{let sideBreak=i===parts.left.length?'<span class="operator">→</span>':'';let op=i>0&&i!==parts.left.length?'<span class="operator">+</span>':'';return `${op}${sideBreak}<span class="species"><span class="coef"><button aria-label="ลดสัมประสิทธิ์" data-step="-1" data-i="${i}">−</button><input aria-label="สัมประสิทธิ์ของ ${f}" id="coef${i}" type="number" min="1" max="999" value="1"><button aria-label="เพิ่มสัมประสิทธิ์" data-step="1" data-i="${i}">+</button></span><span class="formula">${subs(f)}</span></span>`}).join('');$('equation').querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>{let input=$('coef'+b.dataset.i);input.value=Math.max(1,Math.min(999,(+input.value||1)+ +b.dataset.step));}));}
function values(){return [...$('equation').querySelectorAll('input')].map(x=>Math.max(1,parseInt(x.value)||1));}
function check(){let q=filtered[idx],vals=values(),left=splitEq(q.eq).left,right=splitEq(q.eq).right,all=[...left,...right],lc=counts(left,vals.slice(0,left.length)),rc=counts(right,vals.slice(left.length)),bad=[...new Set([...Object.keys(lc),...Object.keys(rc)])].filter(e=>(lc[e]||0)!==(rc[e]||0));attempts++;let f=$('feedback');if(!bad.length&&normalizeAnswer(vals).every((v,i)=>v===q.answer[i])){correctIds.add(q.id);correct=correctIds.size;f.className='feedback good';f.innerHTML=`<strong>✓ ถูกต้อง!</strong><br>จำนวนอะตอมสมดุลแล้ว และใช้สัมประสิทธิ์อย่างต่ำได้ถูกต้อง`; }else{f.className='feedback bad';if(bad.length)f.innerHTML=`<strong>ยังไม่ถูกต้อง</strong><br>จำนวนอะตอมที่ยังไม่สมดุล: ${bad.map(e=>`${e} (ซ้าย ${lc[e]||0} / ขวา ${rc[e]||0})`).join(', ')}<br><br>ลองปรับสัมประสิทธิ์แล้วตรวจอีกครั้ง หรือกด “ดูเฉลย” เพื่อดูคำตอบที่ถูกต้อง`;else f.innerHTML='<strong>ยังไม่ถูกต้อง</strong><br>จำนวนอะตอมเท่ากันแล้ว แต่สัมประสิทธิ์ยังไม่เป็นอัตราส่วนจำนวนเต็มอย่างต่ำ';}updateStats();}
function reveal(){let q=filtered[idx],all=[...splitEq(q.eq).left,...splitEq(q.eq).right];all.forEach((_,i)=>$('coef'+i).value=q.answer[i]);let f=$('feedback');f.className='feedback good';f.innerHTML='<strong>เฉลยที่ถูกต้อง</strong><br>'+q.answer.map((n,i)=>`${n===1?'':n}${subs(all[i])}`).join(' + ').replace(/ \+ /g,' + ').replace(/ \+ (?=)/g,' + ')+'<br>สัมประสิทธิ์ทั้งหมดเป็นอัตราส่วนจำนวนเต็มอย่างต่ำ';}
function updateStats(){$('solvedCount').textContent=correct;$('accuracy').textContent=attempts?Math.round(correct/attempts*100)+'%':'—';$('progressText').textContent=`ตอบถูก ${correct} ข้อ · ตรวจแล้ว ${attempts} ครั้ง`;$('progressFill').style.width=Math.min(100,correct/Math.max(1,filtered.length)*100)+'%';}
function next(){idx=(idx+1)%filtered.length;renderEquation();}
function setFilter(f){currentFilter=f;if(f==='random'){idx=Math.floor(Math.random()*filtered.length);renderEquation();return;}filtered=f==='all'?questions:questions.filter(q=>q.cat===f);if(!filtered.length)filtered=questions;idx=0;document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('selected',b.dataset.filter===f));renderEquation();}
$('checkBtn').addEventListener('click',check);$('showBtn').addEventListener('click',reveal);$('resetBtn').addEventListener('click',renderEquation);$('nextBtn').addEventListener('click',next);document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));document.querySelectorAll('[data-cat]').forEach(b=>b.addEventListener('click',()=>{setFilter(b.dataset.cat);document.getElementById('practice').scrollIntoView({behavior:'smooth'});}));document.querySelectorAll('[data-scroll]').forEach(b=>b.addEventListener('click',()=>{document.getElementById(b.dataset.scroll).scrollIntoView({behavior:'smooth'});document.querySelectorAll('.navlinks button').forEach(x=>x.classList.toggle('active',x===b));}));

$('totalCount').textContent=questions.length;renderEquation();
