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

function ogrencileriGetir() {
    
   return new Promise((resolve, reject) => { 

    setTimeout(() => { 
        const ogrenciler=[];
          for (let i = 0; i < 300 ; i++) {
                ogrenciler.push({ad:"ogrenciler "+ (i+1),id:i+1})     
            } 
            resolve(ogrenciler);
        }, 1000)
            
    })
}

ogrencileriGetir().then((result) => {
    result.map(item=>console.log(item.ad))
});