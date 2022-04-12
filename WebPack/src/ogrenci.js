import axios from 'axios'; 

export default class ogrenci{

    constructor(ad){

        this.ad=ad;

    }

    adınıSoyle(){
        console.log(`benim adim ${this.ad}`);
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>console.log(res.data))
    }

}