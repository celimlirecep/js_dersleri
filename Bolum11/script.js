// console.log(renk)


// a();
// console.log(renk)
// var renk="sari";
// function a() {
//     console.log("mavi")
//     var renk="yeşil";
//     console.log(renk)
// }

// const kisi={
//     ad : "recep",
//     yas:23,
//     soyle:function(){
//         console.log(this);
//         console.log(this.ad)
//     },
     
    
// }


// kisi.soyle();
// const deger=kisi.soyle;
// deger();

// const Araba=function(renk,model){
//     this.renk=renk;
//     this.model=model;

// }

// const honda=new Araba("kırmızı","s7");
// console.log(honda.model)

//  const a={

//     delete(){
//         console.log(this)
//         const lale= "lale";
//         const kara=()=>{
//             console.log(this)//fonksiyon içinde yazıldığında fonksiyonun sınıfını alıtr
//             this.k();
           
//         }

//         kara();
//     },

//     kerata: function(){

//         console.log(this);
//         this.k();
//     },

//     k:()=>{
//         console.log("-------------------")
//         console.log(this)
//         console.log("--------------")
//     }
    


//  }


//  a.delete();
//  a.kerata();
//  a.k();


const iller = {
 illlerDizisi: ["istanbul","Ankara","Adıytaman","İstanbul"],
 ad:"recep",

// yaz(){
//     this.illlerDizisi.forEach(function(element) {
//         console.log(this);
// });
// }
yaz(){
    this.illlerDizisi.forEach(element=> {
        console.log(this);
});
}

}

iller.yaz();
