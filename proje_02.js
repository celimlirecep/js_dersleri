// for(let i=0,j=0;(i+j)<20;i+=2,j+=5){
// console.log(i+" "+j);
// }


//sistem 2 basamaklı bir sayi uretmeli
//kullanici bu sayiyi tahmin etmeli
//kullanıcı doğru bilirse 100 puan
//eger basamaklarını bilirse yani 65 yerine 56 50 puan
//sadece 1 basamak bilirse 25 puan kazanacaktir

let deskopNumber=Math.floor((Math.random() * 90)+10);
console.log("hile: "+ deskopNumber);
let userNumber=parseInt(prompt("Please your estimate: "));

let birlerBasamagi= deskopNumber%10;
let onlarbasamagi=parseInt(deskopNumber/10);
let myBirlerBasamagi=userNumber%10;
let myOnlarBasamagi=parseInt(userNumber%10);

if(deskopNumber===userNumber){
    console.log("wonderful 100 puan");
}

else if(onlarbasamagi===myBirlerBasamagi&&myOnlarBasamagi===birlerBasamagi){
console.log("tebrikler 50 puan");

}
else if(onlarbasamagi===myBirlerBasamagi||myOnlarBasamagi===birlerBasamagi||myOnlarBasamagi===onlarbasamagi||birlerBasamagi===myBirlerBasamagi){
console.log("tebrikler 25 puan");
}
else{
    console.log("malesef bilemediniz");
}




