// const error=document.querySelector('.hata');
// const yeni=document.querySelector("div.hata")
// const yeni2=document.querySelector("#akilli")
// console.log(error);
// console.log(yeni);
// console.log(yeni2);

// const yeni3=document.querySelectorAll('p');
// console.log(yeni3);
// console.log(yeni3[2]);

// yeni3.forEach(element=>console.log(element))

//********************************PARÇA PARÇA BAKMAK DAHA MANTIKLI BÜTÜN ELEMANLARI GEZEREK ARAMAKTANSA */

// const baslik= document.getElementById("baslik");
// console.log(baslik);

// const errors=document.getElementsByClassName("hata");
// console.log(errors);

// const paragraflar=document.getElementsByTagName('p')
// console.log(paragraflar);


//******************************************Sayfa İçeriğini değiştirme */

// const selam=document.querySelector("p");
// console.log(selam.innerText);
// selam.innerText="Değiştirdim"
// console.log(selam);

// const baslik=document.getElementById("topHeader");
// baslik.innerText="AGAM SEN NİTTİN";


// const paragraflar=document.querySelectorAll("p");
// console.log(paragraflar);

// paragraflar.forEach(element=>{

//     element.innerText+=" ekleeeeeeeee"

//     console.log(element.innerText);
// } )


// const icerik=document.querySelector(".content");
// console.log(icerik.innerHTML);
// icerik.innerHTML+=" <h2>AĞLAAA</h2>"

// const ogrenciler=["recep","miko","aslı"];
// //icerik.innerHTML+=`<ul>`;// tek başına eklenince kalanı kendi tamamlar
// ogrenciler.forEach(
//     ogrenci=>
//     {
//         icerik.innerHTML+=`<p>${ogrenci}</p>`
//     }
// )
// //icerik.innerHTML="</ul>"
// console.log(icerik);

//********************************************GET SET */
//ATRİBUTE


// const link=document.querySelector('a');
// console.log(link);

// console.log(link.getAttribute("href"));
// link.setAttribute("href","https://www.wissenakademie.com");
// link.textContent="wissen";//link için textcontent kullanıyoruz



// const pDegeri=document.querySelector("p");
// console.log(pDegeri.getAttribute("class"));
// pDegeri.setAttribute("class","hata");
// console.log(pDegeri.getAttribute("class"));
// pDegeri.setAttribute("style","background-color:red");



//******************************************* */

// const baslik=document.querySelector("h1");
// //baslik.setAttribute("style","padding:50px");// ezer geçer

// baslik.style.padding="100px";// bu şekilde ezmez
// baslik.style.fontSize="60px";
// baslik.style.fontWeight="bold"


//*******************************Class ekle çıkar */

// const içerik=document.querySelector("p");
// console.log(içerik.classList);
// içerik.classList.add("topheader");
// içerik.classList.remove("topheader");

// const basliklar=document.querySelectorAll("p");

// basliklar.forEach(element => {
    
//     if (element.textContent.includes("error")) {
//         element.classList.add("error");
//     }
//     if (element.textContent.includes("success")) {
//         element.classList.add("success");
//     }

// });


//10 elemanlı dizi 
//liste halinde yazdır
//50 üstü başarılı clası 
//50 altı başarısız klası

// const notDizisi=[10,20,60,58,97,12,65,54,98,15,32];
// const liste=document.querySelector("ul");
// liste.innerHTML='<p class="">Basarili</p>';
// console.log(liste);
// notDizisi.forEach(element => {
//     if (element>=50) {
//         liste.innerHTML+=`<li><p class="basarili">${element}</p> </li>`;
       
//     }
//     else
//     {
//         liste.innerHTML+=`<li><p class="basarisiz">${element}</p> </li>`;
//     }
// });

//****************************parent child sibling */

// const section=document.querySelector("section");
// console.log(section.children);
// console.log(Array.from(section.children));

// Array.from(section.children).forEach(child => {
//         child.classList.add("section_element");
// });

// const baslik=document.querySelector("h2");
// console.log(baslik.parentElement.nextElementSibling.previousElementSibling);

//*********************************EVENT LİSTENER */

//const ekle=document.querySelector(".ekle");
// const secmecik=document.querySelector(".secmecik");
// secmecik.addEventListener("mouseover",sunudaYap)
 //ekle.addEventListener("click",sunuyap);
// function sunuyap(e){
//     e.preventDefault();
//     console.log("ekle");
// }
// function sunudaYap(e) {
//     console.log(e.target);
// }


// const lielemanlari=document.querySelectorAll("li");

// lielemanlari.forEach(

//     li=>{
//         li.addEventListener("click",(e)=>e.target.remove());
//     }
// )

//*************************EKLEME */
// const ul=document.querySelector("ul");
// function sunuyap(e){
//     e.preventDefault();
//     const li=document.createElement("li");
//     li.textContent="JavaScrip";
//     ul.appendChild(li);
//     ul.prepend(li);
// }

//******************************************POP UP */

const buton=document.querySelector("button");
const mainPopup=document.querySelector(".main-popup");
const close=document.querySelector(".close-popup");
const closeA=document.querySelector(".popup a");


buton.addEventListener("click",popac);
close.addEventListener("click",popkapat);
//closeA.addEventListener("click",popkapat);
mainPopup.addEventListener("click",kapatPopBak)

function kapatPopBak(e) {
    if (e.target.className==="main-popup" || e.target.textContent==="Kapat") {
        mainPopup.style.display="none";
    }
    else{
        console.log("object");
        closeA.style.backgroundcolor="blue";
    }
}

function popac(e){

    mainPopup.style.display="block";
}
function popkapat(e){

    mainPopup.style.display="none";
    
}