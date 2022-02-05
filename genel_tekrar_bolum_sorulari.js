// 1
// 12
// 123
// 1234 şeklinde 10 a kadar yazdırılsın
//******************************************* */
// let a="";
// for(let i=0;i<11;i++){

//     a=a+i+",";
//     console.log(a);


// }
//***************************************
//klavyeden girilen sayinin faktöriyeli
//let factoriel=parseInt( prompt("enetr your factoriyel number:"));
//et a=1;
// for(let i=1;i<=factoriel;i++){
// a*=i;
// }
// console.log(a);
//******* */
// while(factoriel>0){
//     a*=factoriel
//     factoriel--;
// }
// console.log(a);

//çarpım tablosunu oluştur*********************

let tablo="";
for( let satir=1;satir<11;satir++){

    for( let sutun=1;sutun<11;sutun++){
        tablo+=(satir*sutun+"\t");
        
    }
    tablo=tablo+"\n";
}
console.log(tablo);
//****************** */

// let yazdirilackMetin="";
// for(let i =1;i<11;i++){

//     for(let j=0;j<11;j++){

//         yazdirilackMetin=yazdirilackMetin+(i*j)+"\t";

//     }
//     console.log(yazdirilackMetin);
//     yazdirilackMetin="";
// }


