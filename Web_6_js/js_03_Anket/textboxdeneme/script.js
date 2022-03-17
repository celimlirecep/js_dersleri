const form=document.querySelector("form");
const mesaj=form.querySelector("#mesaj")
const goruntule=form.querySelector("p");

mesaj.addEventListener("click",buyut);

form.addEventListener("submit",ekle);

let girdiMi=true;

function buyut(e){
    e.preventDefault();
    console.log("burda");
    mesaj.setAttribute("class","tiklanmali");
}

function ekle(e){
    e.preventDefault();
    
    // const dizi=Array.from(mesaj.value);
 
    // dizi.forEach(element => {
    //     if (element<"a"||element>="f") {
    //         girdiMi=false;
            
    //     }
    // });
    // if (girdiMi) {
    //     goruntule.textContent=mesaj.value;
    // }
    // else
    // {
    //     alert("dizi aralığı dışında");
    // }
    // girdiMi=true;

    const userName=mesaj.value;

    const userNameModel=/^[a-z]{1,25}$/;
    if (userNameModel.test(userName)) {
        goruntule.textContent="başarili";
        mesaj.setAttribute("class","basarili")
        

    }
    else
    {
        goruntule.textContent="basarisiz";
        mesaj.setAttribute("class","basarisiz");
    }
    
    mesaj.setAttribute("class","tiklanmaliDefault");
    mesaj.value="";
}
console.log();

