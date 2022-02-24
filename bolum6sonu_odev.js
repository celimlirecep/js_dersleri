// let sehirler=[
    
//     {sehiradi:"istanbul",plakaNo:34,sehrinkomsulari:["mavi",13]},
//     {sehiradi:"rize",plakaNo:12,sehrinkomsulari:["mor",12]},



// ];
// sehirler.sort(function(a,b){

//     return a.sehiradi>b.sehiradi?1:(a.sehiradi<b.sehiradi?-1:0);
// })

// console.log(sehirler.reverse());

//*****************FİBONACCİ */

// let sayi=parseInt(prompt("bir sayi giriniz: ",22));
// let yazdir="";
// let yenisayi=0;
// let oncekisayi=0;
// let şimdidenoncekisayi=1;

// while (yenisayi<sayi) {
   
//     yazdir+=yenisayi;
   
//     ikioncekisayi=şimdidenoncekisayi;
//     şimdidenoncekisayi=yenisayi;
//     yenisayi=oncekisayi+şimdidenoncekisayi;
// }
// console.log(yazdir);

//******** ***************************/


let ogrenciler=[
    {ad:"recep",soyad:"celimli",id:12},
    {ad:"seyma",soyad:"kucur",id:11},
    {ad:"ahmet",soyad:"yasar",id:14}
];

let yenidizi=ogrenciler.filter(value=> value.id%2==0)
.map(value=>   value.ad+value.soyad)
.sort()

console.log(yenidizi);