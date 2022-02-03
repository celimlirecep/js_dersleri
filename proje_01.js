//*******istenilen degere gore süre hesabı

 let usernumber= parseInt(parseInt(prompt("lütfen bir sayi giriniz: ")))  ;
 
 let dakika=parseInt(usernumber/60,10);
 let saniye=usernumber-(60*dakika);// usernumber%60
 console.log(`${usernumber} degeri ${dakika} dakika ${saniye} saniyedir.`);

//******* CELCİUS FAHRENHEİT DONUSUMU

// let roomTemperatureFah=prompt("YOU ENTER YOUR ROOM TEMPERATURE: ");
// let roomTemperatureCal=5/9*(roomTemperatureFah-32);
// console.log("your temperature: "+roomTemperatureFah+" celcius degree: " + roomTemperatureCal);


//********** BIR YILIN ARTIK YIL OLUP OLMADIGINI BULMAK ICIN
// YA 400 İLE TAM BOLUNUCEK YADA 4 E BOLUNUM 100 E TAM BOLUNMIYACAK

// let userYear=prompt("please enter the year of your choise: ");
// console.log(userYear%400==0 || (userYear%4==0 && userYear%100!=0));