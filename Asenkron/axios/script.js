function GetData() {
    console.log("GetData");
    axios({
        method:"GET",
        url:"https://jsonplaceholder.typicode.com/users",
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err)
        
    }).then(islem=>
        console.log("islem tamamlandı"));
}
function PostData() {
    console.log("PostData")
}
function PutPatchData() {
    console.log("PutPatchData")
}
function AynıAndaİstekData() {
    console.log("AynıAndaİstekData")
}
function CustomHeader() {
    console.log("CustomHeader")
}
function HataIslemleri() {
    console.log("HataIslemleri")
}

function SonucuEkranaYazdır(response) {

        document.querySelector(".sonuc").innerHTML=`
        <div class="section">
       
        <div class="notification is-warning ">

           <h1> ${response} :</h1>
            <button class="delete"></button>fdhsdfh
        </div>
    </div>
    <div class="block"> </div>
    <section class="section">
        <div class="contaimer">
            <article class="message is-success">
                <div class="message-header">
                    <p>${response}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body has-background-dark has-text-white">
                    sdfsdfg </div>
            </article>
        </div>
    </section>
    <div class="block"> </div>
    <section class="section">
        <div class="contaimer">
            <article class="message is-success">
                <div class="message-header">
                    <p>${response}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body has-background-dark has-text-white">
                    sddsf </div>
            </article>
        </div>
    </section>
    <div class="block"> </div>
    <section class="section">
        <div class="contaimer">
            <article class="message is-success">
                <div class="message-header">
                    <p>${response}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body has-background-dark has-text-white">
                    sdfsdf </div>
            </article>
        </div>
    </section>
        
        `
    

}
SonucuEkranaYazdır();
