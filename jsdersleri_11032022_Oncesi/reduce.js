// const sayilar=[1,2,3,4,5];


// const sonuc =sayilar.reduce(function(pre,val,index) {
//    return pre=val+pre;
// },10);
// console.log(sonuc);

// // MAP
// const sonuc2=sayilar.reduce(function(pre,val){
//     pre.push(val*2);
//     return pre;
// },[]);
// console.log(sonuc2);

// // FİLTER

// const sonuc3= sayilar.reduce(function(dizi,value){
//     if (value>3) {
//         dizi.push(value);
//     }    
//         return dizi;

// },[]);
// console.log(sonuc3);

// //FİND


// const sonuc4=sayilar.reduce 



/*************************** */

// let sayilar=[1,2,3,4];
// //console.log(sayılar);

// sayilar.forEach(element => {
//     console.log(element);
// });

// const yenidizi=sayilar.reduce(function(pre,cur,curındex){

//         if(cur>2){
//                 pre.push(cur);
//         }
//         return pre;

// },[]);
// console.log(yenidizi);


//************************PARANTEZLER DENGELİMİ */

let metin="(()(((((()))))))()";
const dizi=metin.split('');
let sonuc= dizi.reduce(function(pre,value,index){

    console.log(value);
    console.log(pre);
    if (pre<0 ) {
        return pre;
    }

    if (value==="(") {
        ++pre;
        console.log(pre);
       
    }
    
    else if(value===")"){
    pre--;
    console.log(pre);
   
    } 
   
    return pre;
    
    
},0);
console.log(sonuc);
if (sonuc!=0) {
    console.log("denk değil");
}
else{
    console.log("denktir");
}