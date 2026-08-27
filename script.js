
const products=[
{id:"mapfre-rc",company:"MAPFRE",name:"Seguro de Responsabilidad Civil",type:"RC",price:30,priceLabel:"Desde 30 €/año",reimbursement:"—",limit:"RC 60.000–300.000 €",vet:"No (RC)",age:"Consultar",senior:true,ppp:"Consultar",freeVet:"—",wait:"Sin carencia RC",url:"https://www.mapfre.es/particulares/seguros-animales/"},
{id:"mapfre-acc",company:"MAPFRE",name:"Seguro Veterinario de Accidentes",type:"Salud",price:64,priceLabel:"Desde 64 €/año",reimbursement:"Según modalidad",limit:"Hasta 1.000 €/accidente",vet:"Accidentes",age:"Consultar",senior:true,ppp:"Consultar",freeVet:"Sí",wait:"Según cobertura",url:"https://www.mapfre.es/particulares/seguros-animales/"},
{id:"mapfre-acc-enf",company:"MAPFRE",name:"Accidentes + Enfermedad",type:"Salud",price:350,priceLabel:"Desde 350 €/año",reimbursement:"80%",limit:"500–2.000 €/año",vet:"Accidente + enfermedad",age:"Consultar",senior:true,ppp:"Consultar",freeVet:"Sí",wait:"Según cobertura",url:"https://www.mapfre.es/particulares/seguros-animales/"},
{id:"barkibu",company:"Barkibu",name:"Seguro Veterinario",type:"Salud + RC",price:240,priceLabel:"Desde ~20 €/mes",reimbursement:"80%",limit:"Hasta 3.000 €/año",vet:"Accidente + enfermedad",age:"2 meses–<11 años al contratar",senior:false,ppp:"Sí, según condiciones",freeVet:"Sí, cualquier clínica",wait:"Consultar",url:"https://www.barkibu.com/es/seguros-perros"},
{id:"petplan",company:"Petplan",name:"Seguro Veterinario",type:"Salud",price:192,priceLabel:"Desde 16 €/mes (web)",reimbursement:"100%",limit:"Hasta 3.100 €/año",vet:"Accidente + enfermedad",age:"Consultar",senior:false,ppp:"Consultar",freeVet:"Sí",wait:"15 días accidente / 1 mes enfermedad",url:"https://petplan.es/seguro-veterinario-perros-gatos/"},
{id:"santevet-light",company:"Santévet",name:"Light",type:"Salud",price:null,priceLabel:"Precio personalizado",reimbursement:"50%",limit:"2.000 €/año",vet:"Accidente + enfermedad",age:"Consultar",senior:"Consultar",ppp:"Consultar",freeVet:"Según condiciones",wait:"Consultar",url:"https://www.santevet.es/seguros-perros"},
{id:"santevet-confort",company:"Santévet",name:"Confort",type:"Salud",price:null,priceLabel:"Precio personalizado",reimbursement:"70%",limit:"3.500 €/año",vet:"Accidente + enfermedad",age:"Consultar",senior:"Consultar",ppp:"Consultar",freeVet:"Según condiciones",wait:"Consultar",url:"https://www.santevet.es/seguros-perros"},
{id:"santevet-premium",company:"Santévet",name:"Premium",type:"Salud",price:null,priceLabel:"Precio personalizado",reimbursement:"90%",limit:"5.000 €/año",vet:"Accidente + enfermedad",age:"Consultar",senior:"Consultar",ppp:"Consultar",freeVet:"Según condiciones",wait:"Consultar",url:"https://www.santevet.es/seguros-perros"},
{id:"caser-rc",company:"Caser",name:"MIMAscota RC",type:"RC",price:47,priceLabel:"47 €/año",reimbursement:"—",limit:"350.000 € RC",vet:"No",age:"Todas las razas y edades",senior:true,ppp:"98 €/año PPP",freeVet:"—",wait:"Sin carencia RC",url:"https://www.caser.es/seguros-de-mascotas/responsabilidad-civil-perros"},
{id:"caser-salud",company:"Caser",name:"MIMAscota Salud",type:"Salud + RC",price:232.8,priceLabel:"Desde 19,40 €/mes",reimbursement:"Según modalidad",limit:"350.000 € RC",vet:"Según modalidad",age:"Consultar",senior:true,ppp:"Sí",freeVet:"Según modalidad",wait:"Consultar",url:"https://www.caser.es/seguros-de-mascotas/perros"}

{id:"asisa-salud",company:"ASISA",name:"ASISA Mascotas",type:"Salud + RC",price:118.8,priceLabel:"Desde 9,90 €/mes (2026)",reimbursement:"Consultar",limit:"Consultar",vet:"Asistencia veterinaria",age:"Sin límite de edad publicado",senior:true,ppp:"Sí, según condiciones",freeVet:"Consultar",wait:"6 meses sacrificio / 15 días robo",url:"https://www.asisa.es/seguro-para-animales/seguro-para-mascotas"},
{id:"asisa-rc",company:"ASISA",name:"ASISA RC Mascotas",type:"RC",price:20.95,priceLabel:"Desde 20,95 €/año (2026)",reimbursement:"—",limit:"150.000 € RC",vet:"No",age:"Sin límite de edad publicado",senior:true,ppp:"Sí, según condiciones",freeVet:"—",wait:"Consultar",url:"https://www.asisa.es/seguro-para-animales/seguro-para-rc-mascotas"},
{id:"santalucia",company:"Santalucía",name:"Seguro de Mascotas",type:"Salud + RC",price:null,priceLabel:"Calcular precio",reimbursement:"Consultar",limit:"Según póliza",vet:"Accidente + enfermedad opcional",age:"Consultar",senior:"Consultar",ppp:"Sí",freeVet:"Según condiciones",wait:"Consultar",url:"https://www.santalucia.es/seguros-mascotas/seguro-para-perros"},
{id:"fiatc-rc",company:"FIATC",name:"RC Perros 150.000 €",type:"RC",price:62,priceLabel:"62 €/año",reimbursement:"—",limit:"150.000 € RC",vet:"No",age:"Consultar",senior:"Consultar",ppp:"66 €/año",freeVet:"—",wait:"Consultar",url:"https://www.fiatc.es/seguro-animales/responsabilidad-civil-perros"},
{id:"fiatc-rc300",company:"FIATC",name:"RC Perros 300.000 €",type:"RC",price:74,priceLabel:"74 €/año",reimbursement:"—",limit:"300.000 € RC",vet:"No",age:"Consultar",senior:"Consultar",ppp:"79 €/año",freeVet:"—",wait:"Consultar",url:"https://www.fiatc.es/seguro-animales/responsabilidad-civil-perros"},
{id:"lineadirecta-esencial",company:"Línea Directa",name:"Mascotas Esencial",type:"RC",price:39.9,priceLabel:"39,90 €/año",reimbursement:"—",limit:"300.000 € RC",vet:"Televeterinario",age:"Consultar",senior:"Consultar",ppp:"Sí",freeVet:"—",wait:"Consultar",url:"https://www.lineadirecta.com/seguro-mascotas/esencial.html"},
{id:"lineadirecta-completo",company:"Línea Directa",name:"Mascotas Completo",type:"Salud + RC",price:69.9,priceLabel:"69,90 €/año",reimbursement:"Accidente: consultar límites",limit:"300.000 € RC",vet:"Accidente / asistencia",age:"Consultar",senior:"Consultar",ppp:"Sí",freeVet:"Sí para asistencia por accidente",wait:"1 mes asistencia / 3 meses accidente",url:"https://www.lineadirecta.com/seguro-mascotas/completo.html"},
{id:"axa-rc",company:"AXA",name:"RC Perros",type:"RC",price:null,priceLabel:"Calcular precio",reimbursement:"—",limit:"150.000–1.200.000 € RC",vet:"No",age:"Consultar",senior:"Consultar",ppp:"Modalidad PPP",freeVet:"—",wait:"Consultar",url:"https://www.axa.es/seguros-responsabilidad-civil-perros"},
];

function getProfile(){
 const need=document.querySelector("#need")?.value||"all";
 const budget=document.querySelector("#budget")?.value||"all";
 const age=document.querySelector("#age")?.value||"all";
 const ppp=document.querySelector("#ppp")?.value||"all";
 return {need,budget,age,ppp};
}
function score(p,prof){
 let s=0;
 if(prof.need==="rc" && p.type.includes("RC")) s+=5;
 if(prof.need==="health" && p.type.includes("Salud")) s+=5;
 if(prof.need==="both" && p.type.includes("Salud") && p.type.includes("RC")) s+=6;
 if(prof.need==="all" && p.type.includes("Salud")) s+=2;
 if(prof.age==="senior" && p.senior===true) s+=4;
 if(prof.ppp==="yes" && (p.ppp==="Sí" || p.ppp==="98 €/año PPP")) s+=4;
 if(prof.budget==="low" && p.price!==null && p.price<=120) s+=3;
 if(prof.budget==="mid" && p.price!==null && p.price>120 && p.price<=300) s+=3;
 if(prof.budget==="high" && p.price!==null && p.price>300) s+=2;
 return s;
}
function renderComparator(){
 const prof=getProfile();
 let list=products.filter(p=>{
  if(prof.need==="rc" && !p.type.includes("RC")) return false;
  if(prof.need==="health" && !p.type.includes("Salud")) return false;
  if(prof.need==="both" && !(p.type.includes("Salud")&&p.type.includes("RC"))) return false;
  if(prof.age==="senior" && p.senior===false) return false;
  if(prof.ppp==="yes" && p.ppp==="No") return false;
  return true;
 }).sort((a,b)=>score(b,prof)-score(a,prof));
 const tbody=document.querySelector("#compare-body"); if(!tbody)return;
 tbody.innerHTML=list.map((p,i)=>`<tr>
 <td><div class="company">${p.company}</div><div>${p.name}</div>${i===0&&prof.need!=="all"?'<span class="score">Mejor encaje con tus filtros</span>':''}</td>
 <td>${p.type}</td><td>${p.priceLabel}</td><td>${p.reimbursement}</td><td>${p.limit}</td><td>${p.vet}</td><td>${p.freeVet}</td><td>${p.wait}</td>
 <td><a class="btn" target="_blank" rel="nofollow sponsored" href="${p.url}">Web oficial →</a></td></tr>`).join("");
 document.querySelector("#result-count").textContent=`${list.length} opciones mostradas`;
 const first=list[0];
 const why=document.querySelector("#best-fit");
 if(first && prof.need!=="all"){
  why.hidden=false; why.innerHTML=`<strong>Punto de partida:</strong> ${first.company} — ${first.name}. Lo mostramos primero porque encaja mejor con los filtros seleccionados. <b>No significa que sea el mejor seguro del mercado.</b> Comprueba precio y condiciones en la web oficial.`;
 } else why.hidden=true;
}
document.querySelector("#compare-form")?.addEventListener("submit",e=>{e.preventDefault();renderComparator();document.querySelector("#comparador").scrollIntoView({behavior:"smooth"})});
document.querySelector("#reset")?.addEventListener("click",()=>{document.querySelectorAll("#compare-form select").forEach(x=>x.value="all");renderComparator()});
renderComparator();
