const correctAnswers = ["E","E","E","E","E","E","E","E"];
const form=document.querySelector("form");
const result=document.querySelector(".result");
const kullaniciAd=form.querySelector("#ad");
const bastakiResim=document.querySelector(".top-resim");
const topRight=document.querySelector(".top-right");

const kullaniciSoyad=document.querySelector("#soyad");
const logo=document.querySelector(".logo-bolumu");
const logokonumu=document.querySelector(".top-right")
//console.log(logokonumu);
let score=0;
logo.addEventListener("click",logoyukle);

function logoyukle(e)
{
    e.preventDefault();
   if (e.target.classList.contains("logo-buton")) {
       
       bastakiResim.remove();
       let html=e.target.children[0];
       const logoolusturImg=document.createElement("img");
       const logoolusturDiv=document.createElement("div");
       logoolusturDiv.setAttribute("class","top-resim");
       topRight.appendChild(logoolusturDiv);
       console.log(logoolusturDiv);
       const srcElemani=e.target.children[0].getAttribute("src");
       console.log(srcElemani);
       logoolusturImg.setAttribute("src",`${srcElemani}`);
       logoolusturImg.setAttribute("class","resimamblem");
       console.log(logoolusturImg);
       logoolusturDiv.prepend(logoolusturImg);
      // console.log(html);
       // const yeniresim=e.target.children[0];
        //topRight.appendChild(yeniresim);

      //  console.log(topRight.children[0]);
   }
}


form.addEventListener("submit",e=>
{
    e.preventDefault();

    const userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value];
    userAnswer.forEach((answer,index)=>
    {
        if (answer===correctAnswers[index]) score+=12.5;
    })
    result.classList.remove("result-none");
    let score2=0;
    const animateScore=setInterval(()=>{
        
        result.querySelector("span").textContent=`%${score2}`;
        if (score2>=score) {
            clearInterval(animateScore)
            score=0;
        }
        else
        {
        if (score>=100) {
            result.querySelector("p").textContent=`Tebrikler ${kullaniciAd.value+" "+kullaniciSoyad.value} k??le olmaya hak kazand??n??z`;
        }
        else if(score>50){
            result.querySelector("p").textContent="Tebrikler k??le olman??za az kald??";

        }
        else
        {
            result.querySelector("p").textContent="??z??ld??k k??le olmad??????????n??z i??in kabul edemiyoruz";

        }
            score2++;
        }
        
    },20)

})

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

setInterval(zamaniYaz,1000);

