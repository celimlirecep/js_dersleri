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

const Araba=function(renk,model){
    this.renk=renk;
    this.model=model;

}

const honda=new Araba("kırmızı","s7");
console.log(honda.model)
