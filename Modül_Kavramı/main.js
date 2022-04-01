class sinif{
    constructor(ad,yas){
        this.ad=ad;
        this.yas=yas;
        this.yazdır();
    }

    yazdır(){
        console.log(`${this.ad} adlı kişi ${this.yas} yaşındadır`)
    }
}

function topla(n1,n2) {
    const toplam=n1+n2;
    console.log(toplam)
}

 export function cikar(n1,n2) {
    console.log(n1-n2)
}
export default function carp(a,b){
    console.log(a*b);
}

export {
    sinif,
    topla,
}