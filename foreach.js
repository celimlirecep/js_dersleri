

// sayilar.forEach(function(sayi,i){

//     console.log(sayi,i);


// })

//kendi foreach fonksiyonumuzu yazalim
//içinde elemanlar, elemen numaralari olsun,
// ve kalan yazilacak eleman sayisi olsun

let sayilar=[1,2,3,45,78,98,57,63];
function diziTarama(arrayname,callback){
for (let i = 0; i < arrayname.length; i++) {
    callback(arrayname[i],i,(arrayname.length-i-1));
}
}
diziTarama(sayilar,function(elemeanadi,elamanindex,kalanelemansayisi)
{
    console.log(`${elemeanadi} ${elamanindex}  ${kalanelemansayisi}`)
}

);