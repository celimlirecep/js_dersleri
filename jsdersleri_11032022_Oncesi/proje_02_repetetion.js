//50-60 arasında tam sayi üret
//kullanıci sayi üretsin
//kullanıci bilirse 100 puan
//iki rakamlarinin bilirse 50
//tek rakamını bilirse 25
//bilemesse kaybettiniz yazsin

let deskopSayiNumarasi= Math.floor(Math.random()*10+50);
console.log(deskopSayiNumarasi);
let userSayiNumarasi=parseInt(prompt("Enter your number: "));
let deskopBirlerBasamagi= deskopSayiNumarasi%10;
let deskopOnlarBasamagi=Math.floor(deskopSayiNumarasi/10);
let userBirlerBasamagi= userSayiNumarasi%10;
let userOnlarBasamagi=Math.floor(userSayiNumarasi/10);
console.log(deskopOnlarBasamagi+" "+userOnlarBasamagi+" "+deskopBirlerBasamagi+" " +userBirlerBasamagi
 );
if(userSayiNumarasi===deskopSayiNumarasi){
console.log("dogru tahmin 100 puan");
}
else if(deskopOnlarBasamagi===userBirlerBasamagi&& deskopBirlerBasamagi===userOnlarBasamagi){
    console.log("rakamalari dogru tahmin ettiniz 50 puan");
    }
else if(deskopBirlerBasamagi===userOnlarBasamagi||deskopBirlerBasamagi===userBirlerBasamagi||deskopOnlarBasamagi===userBirlerBasamagi||deskopOnlarBasamagi===userOnlarBasamagi){
    console.log("bir rakamı tahmin ettiniz 25 puan");
    
}
else{
    console.log("kaybettiniz!!!");
}