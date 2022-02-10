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

// let tablo="";
// for( let satir=1;satir<11;satir++){

//     for( let sutun=1;sutun<11;sutun++){
//         tablo+=(satir*sutun+"\t");
        
//     }
//     tablo=tablo+"\n";
// }
// console.log(tablo);
//****************** */

// let yazdirilackMetin="";
// for(let i =1;i<11;i++){

//     for(let j=0;j<11;j++){

//         yazdirilackMetin=yazdirilackMetin+(i*j)+"\t";

//     }
//     console.log(yazdirilackMetin);
//     yazdirilackMetin="";
// }

/********************************************** 
 *bilgisayar sayi uretsin(1-100) kullanici tahmin etsin  yukari assagi yazdirsin
 kullanici bildiğinde kacinci denemede buldugunu yazdirsin 
*/

// let deskopNumberProduct=Math.floor(Math.random()*101);
// console.log(deskopNumberProduct);
// let userNumberProduct=0;
// let estimateCounter=0;
// do{
//     estimateCounter++;
//      userNumberProduct=parseInt(prompt("enter your estimate: "));
//     if(userNumberProduct>deskopNumberProduct){
//     console.log("enter a number smaller number than the current number     "+estimateCounter);
//     }
//     else if(userNumberProduct<deskopNumberProduct){
//         console.log("enter a number bigger number than the current number    "+estimateCounter);
//     }
//     else{
//         console.log("your estimate is true    "  +estimateCounter);
//     }
    
// }while(userNumberProduct!=deskopNumberProduct);


//********* kullnıcıdan süerkli sayi alan ve 0 a basildiginda çarpımlarini yazan */

// let userNumberProduct=parseInt(prompt("enter your number: "));
// let multiplication=1;
// while(userNumberProduct!==0){
//     multiplication*=userNumberProduct;
//     userNumberProduct=parseInt(prompt("enter your number: "));


// }
// console.log(multiplication);

//EBOB BULUCU
// let userNumberProduct1=parseInt(prompt("enter your number1: "))
// let userNumberProduct2=parseInt(prompt("enter your number2: "))

// let i=2;
// let ebob=1;
// while(i<=userNumberProduct1&&i<=userNumberProduct2){
//     if(userNumberProduct1%i==0 &&userNumberProduct2%i==0){
//         ebob=i;
//     }
//     i++;
    
// }
// console.log(ebob);

// let num1=parseInt(prompt("enter your number: "));
// let num2=parseInt(prompt("enter your number: "));
// let ebob=1;
// for(let i=1;i<=num1&&i<=num2;i++){
// if(num1%i==0&&num2%i==0){
// ebob=i;
// }
// }
// console.log(ebob);

// if(ebob==1)
// console.log("kendi aralarinda asaldir");

//********* */ yazilan sayiya kadar olan asal sayilari yazdıran programi bulunuz

// let userNumber =parseInt(prompt("please your integer number: "));
// let asalmi=true;
// for(let i=2;i<userNumber;i++){
// for(let j=2;j<i;j++){
//     if(i%j==0){
//         asalmi=false;
//         break;
//     }
// }
// if(asalmi){
//     console.log(i+" ");
// }
// asalmi=true;

// }

//1+2+4+7+11+16+20+23+25+26+28+31+35=229
let artismiktari=0;
let artismi=true;
let sayac=1;
for(let i=1;i<=35;i+=artismiktari){
    console.log(i);
   
    if(artismiktari<5&&artismi==true){
        artismiktari++;
    }
    else{
         if(sayac<5){
        artismiktari--;
        artismi=false;
        sayac++;
        }
        else{
        artismi=true;
        artismiktari++;
      }
    }
    
}


