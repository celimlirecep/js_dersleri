const correctAnswers = ["E","E","E","E","E","E","E","E"];
const form=document.querySelector("form");
const result=document.querySelector(".result");
const kullanıcıAd=document.querySelector("#ad");
const kullanıcıSoyad=document.querySelector("#soyad");
let score=0;


form.addEventListener("submit",e=>
{
    
    e.preventDefault();

    
   
    const userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value];
    userAnswer.forEach((answer,index)=>
    {
        if (answer===correctAnswers[index]) score+=12.5;
    })
    result.classList.remove("result-none");

    if (score==100) {
     
        result.querySelector("span").textContent=`%${score}`
    }
    else if(score>75){
        result.textContent=`Scorunuz: ${score} , köle olmanıza az kaldı  `
    }
    else if(score>50){
        result.textContent=`Scorunuz: ${score} , köle olma yolunda biraz daha çaba harcamalısınız `
    }
    else{
        result.textContent=" BİZİM ŞİRKETİMİZE GİRMEYEREK NE KAYBETTİĞİNİN FARKINDAMISIN"
    }
    console.log(score);
    
let score2=0;
console.log(score+"*************");

const animateScore=setInterval(()=>{
    
    result.querySelector("span").textContent=`%${score2}`;
    if (score2>=score) {
        clearInterval(animateScore)
    }
    else
    {
        score2++;
    }
    
},20)

})
score=0;
//*********************************SAAT */
const clock=document.querySelector(".clock");



function zamaniYaz() {
    const zaman=new Date();
let saat=zaman.getHours();
let dakika=zaman.getMinutes();
let saniye=zaman.getSeconds();
    const html=`
<span>${saat}</span>:
<span>${dakika}</span>:
<span>${saniye}</span>
`;
clock.innerHTML=html;
}

setInterval(zamaniYaz,10);

