const sayilar=[1,2,3,4,5];


const sonuc =sayilar.reduce(function(pre,val,index) {
   return pre=val+pre;
},10);
console.log(sonuc);

// MAP
const sonuc2=sayilar.reduce(function(pre,val){
    pre.push(val*2);
    return pre;
},[]);
console.log(sonuc2);

// FİLTER

const sonuc3= sayilar.reduce(function(dizi,value){
    if (value>3) {
        dizi.push(value);
    }    
        return dizi;

},[]);
console.log(sonuc3);

//FİND


const sonuc4=sayilar.reduce 