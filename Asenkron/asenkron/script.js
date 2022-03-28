//call back fonksiyon ile asenkron çalışma



// function ogrencileriGetir(callback) {

//    let ogrenciler=[];

// setTimeout(() => {
//     for (let i = 0; i < 300 ; i++) {
//         ogrenciler.push({ad:"ogrenciler"+ (i+1),id:i+1})     
//     }
//     callback(ogrenciler);
// }, 3000);

// }


// function ogrencileriYazdır(dizi) {
//     console.log(dizi);
// }

// ogrencileriGetir(ogrencileriYazdır);


//****************promise kullanımı */

// function ogrencileriGetir() {

//    return new Promise((resolve, reject) => { 

//     setTimeout(() => { 
//         const ogrenciler=[];
//           for (let i = 0; i < 300 ; i++) {
//                 ogrenciler.push({ad:"ogrenciler "+ (i+1),id:i+1})     
//             } 
//             resolve(ogrenciler);
//         }, 1000)

//     })
// }

// ogrencileriGetir().then((result) => {
//     result.map(item=>console.log(item.ad))
// });

// function getUser(id) {
//     console.log(id+" ID li kullanıcı getiriliyor");
//     return new Promise((resolve, reject) => { setTimeout(() => { resolve({ad:`kullanıcı-${id}`, Id:id}) }, 2000) })
// }
// function getCourses(userName) {
//     console.log(userName+ " kurs bilgileri getiriliyor");
//     return new Promise((resolve, reject) => { setTimeout(() => { resolve(["js","html","c#"]) }, 2000)  })
// }

// getUser(12)
// .then(kullanıcı=>getCourses(kullanıcı.ad))
// .then(kurs=>console.log(kurs) )




// **************************Fetch kullanımı text

// const getTextD = document.getElementById("getText");
// const sonuç = document.getElementById("sonuc");

// getTextD.addEventListener("click", GetText)

// function GetText(e) {
//    e.preventDefault();


//     const sonuc = fetch("deneme.txt")
//     sonuc
//         .then(res => res.text())
//         .then(data => console.log(data))

// }

// Fetch kullanımı json

const getTextD = document.getElementById("getText");
const sonuc = document.getElementById("sonuc");

getTextD.addEventListener("click",getOgrenciler)


function getOgrenciler(e) {
    e.preventDefault();
    fetch("ogrenci.json")
    .then(res=>res.json())
    .then(data=>{
        if (data!=null) {
            let text="";
            data.map(item=>{
                 text +=` ${item.ad} `;
            })
            sonuc.innerText=text;
        }
    })
}