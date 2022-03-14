let isim="recep celimli";
console.log(...isim);

let kopya=[...isim];
console.log(...kopya);

for(let s of isim){

console.log(s);

}// dizi oluşturulmasını sağlıyor

console.log(isim.split(''));//karakter karakter ayırdı
//... spread operatörü ile aynı





function topla(...parametre){
    let toplam=0;
for(let s of parametre){

    toplam+=s;
}
console.log(toplam);
}

topla(1,2,3,4,5);


topla(1,2,3,9,12);
