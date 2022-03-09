const myform=document.querySelector('#form');
const ad=document.querySelector('#ad');
const aktarad=document.querySelector('#aktar');

myform.addEventListener('submit',eventiYakala);
myform.addEventListener('keydown',eventiYakala);
myform.addEventListener('keyup',eventiYakala);
function eventiYakala(e){
    console.log(ad.value);
    console.log("Event adı: "+e.type);
    e.preventDefault();
    aktarad.textContent=ad.value;
}
const illerID=document.querySelector('#sehir').addEventListener('change',sehirIdCek);
function sehirIdCek(e){
    console.log(e.target.value);
}