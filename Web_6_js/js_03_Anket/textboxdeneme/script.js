const form=document.querySelector("form");
const mesaj=form.querySelector("#mesaj")
const yaz=form.querySelector("p");

form.addEventListener("submit",ekle);

function ekle(e){
    e.preventDefault();
    
    if (mesaj.value!=="") {
        yaz.innerText=mesaj.value;
    }

}
console.log();