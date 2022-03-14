// const Mydizi= function(){
//     console.log("hello world");
// }

// //Mydizi;

// const Mydizi2=()=>{
//     console.log("hello world");
// }
// Mydizi2();

// let arabaMarkalari=["a","b","c",6];
// console.log(arabaMarkalari.toString());

// console.log(typeof(arabaMarkalari[2]))
// console.log(arabaMarkalari);
// arabaMarkalari.push("d");
// console.log("********** push d: "+arabaMarkalari.toString());
// arabaMarkalari.shift();
// console.log("********** shift a :"+arabaMarkalari.toString());
// arabaMarkalari.pop();
// console.log("********** d silinicek :"+arabaMarkalari.toString());
// arabaMarkalari.unshift("aga");
// console.log("********** aga eklicek  : "+arabaMarkalari.toString());

// console.log(arabaMarkalari[1]);

// let sayilar = [1,2,3,4,5,6,7,8];
// sayilar.splice(5,2,10,9);
// console.log(sayilar.toString());

// console.log();

//*********** OBJELER */

// let recep = {
//     adi:"recep",
//     DogumYili: 123,
//     evlimi:false,
//     SevdigiRenkler:["mavi,yesil"],
// };

// console.log(recep);
// console.log(recep.DogumYili);
// console.log(recep["SevdigiRenkler"]);

// let yaslar={

//     dogumYili:1988,
//     yas: function () {
        
//         return 2020-this.dogumYili;
//     },

// }

// console.log(yaslar.yas());

// let recep={
//     dogumyili: 1978,
//     yashesabi: function () {
//         this.yas=2020-this.dogumyili;
//     },
// }
// recep.yashesabi();
// console.log(recep.yas);
// console.log(Array instanceof Object);

//******************fonksiyon içinde dizi ve fonksiyon

// const ikiilecarp= function(sayi){
// return sayi*2;
// }
// const ucekle=function(sayi){
//     return sayi+3;
// }

// let sayilar =[1,2,3];

// const islem=function(dizi,fonksiyon){

//     let copydizi=[];
//     for (let i = 0; i < dizi.length; i++) {
//         copydizi[i] = fonksiyon(dizi[i]) ;
        
//     }
//     console.log(copydizi);
// }

// islem(sayilar,ucekle);
// islem(sayilar,ikiilecarp);

function secimler(ad,soyad,callback){
const mesaj="hosgeldin "+ad.toUpperCase()+" "+soyad.toUpperCase();
callback(mesaj);
}
secimler("recep",'celimli',function (metin){
    console.log(metin);
})
