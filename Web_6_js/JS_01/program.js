//alert('UYARI'); ************* UYARI VERME
// console.log('RECEP');
// console.log(265);
// var sayi1=5;
// var sayi2=6;
// console.log(sayi1+sayi2);
// console.log(sayi1+""+sayi2);
//***************************************************** */
// let gun=14;
// let ay=3, yil=2022;
// console.log(gun,ay,yil);
// console.log("Bugünün tarihi: " +gun+"/"+ay+"/"+yil);
// const webSabah=15;
// console.log(webSabah);
//************************************************************** */
// let ad='mikail';
// console.log(ad);
// let soyad="Aga";
// console.log(soyad);
// console.log(ad+" " +soyad);
// let sehirAd="Ağrı";
// let sehirAd2="İzmir";
// console.log(sehirAd.toUpperCase());
// console.log(sehirAd2.toLocaleUpperCase());


//*********************************İndexi bulma */

// let siraNo=sehirAd.indexOf('ğ');
// console.log(siraNo);

// let adSoyad="Recep Çelimli";
// console.log(adSoyad);
// let sonSiraNo=adSoyad.lastIndexOf('i');
// console.log(sonSiraNo);
// let bastanAl=adSoyad.slice(4,6);
// console.log(bastanAl);
// let bastanAl2=adSoyad.substring(4,1);
// console.log(bastanAl2);
// let bastanAl3=adSoyad.substr(5,2);
// let degistir=adSoyad.replace(" ","");
// console.log(degistir);// tek bi tanesi için yapar

//******************************************************************* */
// let yariCap=15;
// const piSayisi=3.14;
// let alan=piSayisi*(yariCap**2);
// console.log(alan);

// let kalan=alan%2;
// console.log(kalan);

// let tamSayi=Math.trunc(145.478);
// console.log(tamSayi);
// let assagiYuvarla=Math.floor(142.);
// console.log(assagiYuvarla);
// let yukariYuvarla=Math.ceil(11.000001);
// console.log(yukariYuvarla);

// let yuvarla=Math.round(15.87)
// console.log(yuvarla);

//************************************************************************* */
// const frameWork1="Angular";
// const frameWork2="React";
// const frameWork3="Vue";

// console.log(`Populer JavaScript FrameWorkleri: ${frameWork1} ${frameWork2} ${frameWork3}`);

// let html=`
// <h1>${frameWork1}</h1>
// <h1>${frameWork2}</h1>
// <h1>${frameWork3}</h1>
// `;

// console.log(html);

//******************************************Array */

// let isimler=["Engin","Umay","Begüm"];

// console.log(isimler[1]);
// let yaslar=[13,56,34]

// console.log(yaslar[0],yaslar[1]);

// let karisik=["0","begüm",15,13];

// console.log(karisik[1],karisik[3]);
// console.log(karisik[2]+karisik[3]);
// console.log(karisik.length);

// let virgulluBirlestir=isimler.join(',');
// console.log(virgulluBirlestir);

// let ekle=karisik.concat(["a","b",23]);

// console.log(ekle);

// ekle.push("agaaaa");
// console.log(ekle);

// ekle.pop();
// console.log(ekle);
//*********************************************************************** */

// let yas;
// console.log(yas);
// console.log(yas+5);
// console.log(`yas: ${yas}`);

// let yas=null;

// console.log(yas);
// console.log(yas+5);

//*********************************************************************** */

// let dogruMi=false;
// console.log(dogruMi);
// let ad="Recep çelimli";

// let varMi=ad.includes("e");
// console.log(varMi);

// let soy="celimli";
// console.log(soy=="celimli");//Küçük büyük harf duyarlı

// let yas =229;
// console.log(yas+" "+typeof(yas));
// let ad="recep";
// console.log(ad+" "+typeof(ad));
// let durum =false;
// console.log(durum+" "+typeof durum);
// console.log(typeof(yas) =="number");


//************************************************FOR */

// for (let i = 0; i < 10; i++) {
    
// console.log(i);
// }


 let isimler=["Berkay","Elif","Recep"];
// for (let i = 0; i < isimler.length; i++) {

//     const html=`
//     <div>${isimler[i]}</div>
//     `;
//     console.log(html);

// }


//***************************************************WHİLE */
// let i=0;

// while (i<isimler.length) {
    
//     console.log(isimler[i++]);
// }


//*********************************************************IF */
// const yas=45;
// if (yas<78) {
//     console.log("dogru");
// }

// const sifre="dsgddfsdfsdf";
// if (sifre.length>8) {
//     console.log("yeterli sifre");
// }
// else if (sifre.length>5) {
//     alert("biraz daha ekle")
// }
// else
// {
//     console.log("yetersiz Sifre");
// }


// const sifre="sdfsdgsdfgsdfg!";
// if (sifre.length>=12 && sifre.includes('!')) {
//     console.log("var");
// }

// let ad="recep";

// if (ad=="Mikail"|| ad=='Berkay') {
//    var durum=true;
// }
// else
// {
//     var durum=false;
// }
// if (!durum) {
//     console.log("girdi");
// }


//************************************************************ Break Continue */

// const notlar=[30,40,89,54,12,3,45,36];

// for (let i = 0; i < notlar.length; i++) {
//     const element = notlar[i];
//     if (element==89) {
//         continue;
//     }
//     console.log(element);

//     if (notlar[i]==3) {
//         console.log("En düşük not bakamıyacam çık");
//         break;
//     }
// }

// const not=20;

// switch (not) {
//     case 10:
//         console.log("10 dur");
//         break;
//     case 30:
//         console.log("30 dur");
//         break;
//     case 50:
//             console.log("30 dur");
//             break;
//     default:
//         console.log("Hiç biri deil kuzu");
//         break;
// }

//**********************************************Function */
// let sayim=25.15;

// function yuvarla(sayi) {
    
//     return Math.round(sayi);
    
// }


// console.log(yuvarla(sayim));
// const mesaj=function () {
//     console.log("Buda yeni mesajınız");
// }
// mesaj();

// function adSoyadYaz(ad="Recep",soyad="") {
//     console.log(` ${ad}  ${soyad} nörüyon gııı`);
// }
// adSoyadYaz();
// adSoyadYaz("engin","niyazi");


// const alan= alanx=> {
//     console.log(alanx**2);
// }

// alan(5)


//************************************************** */
// const topla=(sayi1,sayi2)=>sayi1+sayi2;


// console.log(topla(12,32));

// const alan= alan2=>alan2**2;
// console.log(alan(12));
//console.log(fatura2([10,20,30],0.2));
// const fatura=(urunFiyatlari,vergiOrani)=>{
//     let toplam=0;
//     for (let i = 0; i < urunFiyatlari.length; i++) {
//         const element = urunFiyatlari[i];
//         toplam+=(element*(vergiOrani+1));
//     }
//     return toplam;
// }





//********************** */
// let ogrenciler=["recep","ali","ahmet"];



// let html=``;
// ogrenciler.forEach(
//     ogrenci=>{
//         html+=`<li>${ogrenci}</li>`;
//     }
// )
// console.log(html);
// ulmain.innerHTML=html;
// const pDegeri=document.querySelector('p');
// pDegeri.innerText= "hello";


//**************************************************** */

// let ogrenci={

//     ad:"recep",
//     yas:25,
//     evliMi:true,
//     login(){console.log(`${this.ad} hoşgeldin`)},
//    // dogumtarihi:()=>{return 2022-this.yas},***************************************************************
//     arkadaslari:["miko","asli"],
//     printcocuklar(){
//         this.arkadaslari.forEach(element => {
//             console.log(element);
//         });
//     },
//     dersler:[
//         {ad:"Matematik",not:89},
//         {ad:"Fizik",not:79},
//         {ad:"Kimya",not:76}

//     ],

//     printDersler(){
//         this.dersler.forEach(ders=>console.log(ders.ad+" => "+ders.not))
//     },


// }
    
// //console.log(ogrenci.dogumtarihi());

// console.log(typeof ogrenci);

// ogrenci.login();
// ogrenci.printcocuklar();
// ogrenci.printDersler();

//***************************************************** Rasgele Sayı Üretme */

// const rasgele=Math.trunc(Math.random()*100);

// console.log(rasgele);

let i=0;
console.log((i++));