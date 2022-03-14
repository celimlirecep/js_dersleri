const bitkiler=[
    {ad:"üzüm",tur:"meyve"},
    {ad:"elma",tur:"meyve"},
    {ad:"pirasa",tur:"sebze"},
]

// const meyveBul= function(mydizi){
//     const copydizi=[];
//     for (let i = 0; i < mydizi.length; i++) {
//         if (mydizi[i].tur==="meyve") {

//             copydizi.push(mydizi[i]);
//         }
//     }
//     return copydizi;
// }
// const meyveler=meyveBul(bitkiler);
// console.log(meyveler);

//*********FİLTER  FUNCTİON */
function myfilter(mydizi,callback){
    const copydizi=[];
    for (let i = 0; i < mydizi.length; i++) {
        const sonuc = callback(mydizi[i],"meyve");
        if (sonuc) {
            copydizi.push(mydizi[i]);
        }
    } 
    return copydizi;
}

const meyveler =myfilter(bitkiler,(bitki,sart) =>
     bitki.tur===sart

);
console.log(meyveler);