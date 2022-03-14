let isim=["e","b","c"];
console.log(isim.sort());//tek isimde sıralama

let sayi=[1,2,33,94,7];
console.log(sayi.sort(function(a,b){
    return a-b; 
}));
/*
0 dan buyuk olma durumu 
0 a eşit olma durumu
0 dan kucuk olma durumu
 BUNLARA BAKIARAK KÜÇÜKLÜK BÜYÜKLÜK SIRALAMASI YAPILIR
*/


let sayilar =[
    {isim:"A",yas:12},
    {isim:"B",yas:11}

]

//***isimlerde sıralama */
let yenidizi=sayilar.sort(function(a,b){
return a.yas-b.yas;

})
console.log(yenidizi);

let yenidizi2=sayilar.sort(function(a,b){
        if (a.isim>b.isim) {
            return 1;
        }
        else if (a.isim<b.isim) {
            return -1;
        }
         else {
             return 0;
            
        }


})
console.log(yenidizi2);