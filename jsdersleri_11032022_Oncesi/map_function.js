let sayilar=[1,2,3,45,65,79];

const kitaplar=[
    {ad:'a kitabi',sayfa:'40'},
    {ad:'b kitabi',sayfa:'70'},
    {ad:'c kitabi',sayfa:'30'}
]
 
// const yeniSayilar=sayilar.map(function(sayi){
//     return sayi*4;
// })
// console.log(yeniSayilar);
// console.log(sayilar);

// const YeniSayfa=  kitaplar.map(function(kitap){
//     return kitap.sayfa*3;
// })
// console.log(kitaplar);
// console.log(YeniSayfa);

//**********KENDİ MAP FONKSİYONUMUZ */

function dizicopy(mydizi,callback){
    const copydizi=[];
    for (let i = 0; i < mydizi.length; i++) {
        copydizi.push(callback(mydizi[i]));
    }
    return copydizi;
}
const yenisayilar=dizicopy(sayilar,function(sayi){
    return sayi*3;
})
console.log(yenisayilar);
console.log(sayilar);

const yenisayfalar=dizicopy(kitaplar,function(kitap){
    return kitap.sayfa*3;
})
console.log(yenisayfalar);

