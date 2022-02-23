
const sayilar=[1,2,3,4,5,6,7,8,9];

//sayilar dizisindeki tek elemanları bul 
//başka diziye aktar(filter)


const teksayilar=sayilar.filter(function(value){
    return value%2!==0;
})

console.log(teksayilar);

// iki katını al başka diziye aktar (map)

const tekSayilarinKaresi=teksayilar.map(function(value){
    return value*2;
})

console.log(tekSayilarinKaresi);
//****** 10 DAN BÜYÜK OLANLARİ TOPLA (REDUCE)*/
const OndanBuyukSayilarToplami=tekSayilarinKaresi.reduce(function(pre,val,index){
    
            if (val>10) {
                pre+=val;
            }
            return pre;
},0)

console.log(OndanBuyukSayilarToplami);


//**KISA VERSİYONDA SAYILARI BİRLEŞTİRME */


function kisaversiyon(sayilar){

    return  sayilar.filter(value=> value%2!==0)
    .map(sayilar=>sayilar*2)
    .reduce((toplam,value)=>value>10?toplam+=value:toplam,0)
}

console.log(kisaversiyon(sayilar));



//***split */


let isim="recep çelimli";

let dizi=[...isim];
console.log(dizi);


let sayilar2=[1,2,3,45,4587];
let dizi2=[...sayilar2]
console.log(dizi2)