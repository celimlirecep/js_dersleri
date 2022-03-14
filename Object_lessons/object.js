// const recep={
//     ad:'recep',
//     yas:23,
//     evliMi:false,
//     sevdigiRenkler:['sari','lacivert'],
//     adres:{
//         il:'ankara',
//         kod:06,
//     },
//     bilgileriSoyle:function(){
//         return `Benim adım ${this.ad} Yasim ${this.yas}`;
//     },
//     ['Ismin-Tamami']:'Recep Çelimli',// degerlerde - diye bir değişken varsa kullanımı
// };

// console.log(recep.sevdigiRenkler);
// console.log(recep.adres.il);
// console.log(recep.bilgileriSoyle());
// console.log(recep['evliMi']);
// console.log(recep["Ismin-Tamami"]);
// recep.okul="YTü";
// console.log(recep.okul);
// delete recep.okul;
// //console.log(recep.okul); silindi

// Bir sınıfı birden fazla öğrenci için kullanılmak istenildiğinde

// const recep=creatOgrenci('recep','12','false');
// const hasan=creatOgrenci('hasan','16','true');

// //factory function
// function creatOgrenci(ad,yas,evliMi){
//     return {
//         Isim:ad,
//         Yasi:yas,
//         EvliMi:evliMi,
//     };
// }
// console.log(recep);
// console.log(hasan);


//constructor function ile nesne üretimi

// function Ogrenci(ad,soyad){

//     this.ad=ad;
//     this.soyad=soyad;
// }
// // Property oluşturduk
// const ogrenci1=new Ogrenci('recep','çelimli');
// console.log(ogrenci1.ad);

// Ogrenci.prototype.Selamver=function(){
//     return `Merhaba ${ogrenci1.ad} ${ogrenci1.soyad} nasılsın? `;
// }

// console.log(ogrenci1.Selamver());


//class kullanımı

class Person{

    static sayac=0;
    constructor(ad,soyad){
        this.ad=ad;
        this.soyad=soyad;
        Person.sayac++;
    }
    selamVer(){
        return`${this.ad} nasılsın`
    }
}

class Ogrenciler extends Person{
    static sayac00;
    constructor(ad,soyad,sınıf){
        super(ad,soyad);
        this.sınıf=sınıf;
        Ogrenciler.sayac++;
    }
    selamVer(){
        return `${this.ad +" adlı öğrenci "+this.sınıf}. sınıfa gidiyor `;
    }
}

const person1=new Person('recep','celimli');
const ogrenci1=new Ogrenciler('Ayse','falloş',8);
console.log(ogrenci1.ad+" "+ ogrenci1.selamVer());
console.log(Person.sayac);
console.log(Ogrenciler.sayac);
const ogrenci2=new Ogrenciler('hayriye','hatun',7);
console.log(Ogrenciler.sayac); 
console.log(Person.sayac);