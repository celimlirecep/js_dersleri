function GetData() {
    console.log("GetData");
    // axios({
    //     method:"GET",
    //     url:"https://jsonplaceholder.typicode.com/users",
    //     params:{
    //         _limit:2
    //     }
    // })
    axios
    .get("https://jsonplaceholder.typicode.com/users/1",{
        params: {
            _limit:1,
        }
    })
    .then((result) => {
       SonucuEkranaYazdır(result);
    }).catch((err) => {
        console.log(err)
        
    }).then(islem=>
        console.log("islem tamamlandı"));
}
function PostData() {
    console.log("PostData")
    axios
    .post("https://jsonplaceholder.typicode.com/users",{
        
        "name": "recep",
        "username": "çelimli",
        "email": "recep@april.biz"

    }).then((response) => {
        SonucuEkranaYazdır(response)
        
    }).catch((err) => {
        console.log(err)
        
    });
}
function PutPatchData() {
    console.log("PutPatchData")

    axios
    .patch("https://jsonplaceholder.typicode.com/users/1",{
           
    "name": "ahmet",
    "username": "çelimli",
    "email": "recep@april.biz"

}).then((response) => {
    SonucuEkranaYazdır(response)
    
}).catch((err) => {
    console.log(err)
    
});
}
function AynıAndaİstekData() {
    console.log("AynıAndaİstekData")
    axios.all([
        axios.get("https://jsonplaceholder.typicode.com/users?_limit=3"),
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=3"),
    ])
    .then(axios.spread((user,post) => {
        console.log(user.data)
        console.log(post.data)
    })).catch((err) => {
        console.log(err)
    });
}

const axiosNesnesi=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{
        "X-Requested-With":"XMLHttpRequest",
        'token':"obaaa"
    }

})
function GenelKullanım(){
    axiosNesnesi.get("/users").then((result) => {
        SonucuEkranaYazdır(result);
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
}

axios.defaults.headers.common["X-Auth-Token"]="apitokendegeri"

function CustomHeader() {
    console.log("CustomHeader")
    const config={
     
        headers:{
            'Content-Type': "application/json",
            Autharization:"sizinTokenDegeriniz"
        }
    }
    axios
    .post("https://jsonplaceholder.typicode.com/users",{
        "name": "recep",
        "username": "çelimli",
        "email": "recep@april.biz"
    },config)
    .then((response) => {
    SonucuEkranaYazdır(response)})
    .catch((err) => {
    console.log(err)
    })

}
function HataIslemleri() {
    console.log("HataIslemleri")
    axios.get("https://jsonplaceholder.typicode.com/usersss")
    .then((result) => {
        
    }).catch((err) => {
        document.querySelector(".sonuc").innerHTML=`
        <div class="section">
       
        <div class="notification is-warning ">
            Sonuç:
           <h1>  <pre> ${JSON.stringify(err.response.status,null,2)}   <pre> </h1>
            <button class="delete"></button>
        </div>`
        
    });


  
}
function DeleteIslemleri() {
    console.log("Delete")

    axios
    .delete("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
    SonucuEkranaYazdır(response)})
    .catch((err) => {
    console.log(err)
    })
}
axios.interceptors.response.use(response=>{
    if (response.status==200||response.status==201) {
        response.status="İşlem Başarılı...";
    }
    return response;
})


function SonucuEkranaYazdır(response) {

        document.querySelector(".sonuc").innerHTML=`
        <div class="section">
       
        <div class="notification is-warning ">
            Sonuç:
           <h1>  <pre> ${response.status}   <pre> </h1>
            <button class="delete"></button>
        </div>
    </div>
    <div class="block"> </div>
    <section class="section">
        <div class="contaimer">
            <article class="message is-success">
                <div class="message-header">
                    <p>Headers: </p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body has-background-dark has-text-white">
              <pre>  ${JSON.stringify(response.headers,null,1)}</pre>
              </div>
            </article>
        </div>
    </section>
    <div class="block"> </div>
    <section class="section">
        <div class="contaimer">
            <article class="message is-success">
                <div class="message-header">
                    <p>Data:</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body has-background-dark has-text-white">
                <pre> ${JSON.stringify(response.data,null,5)}</pre>
                </div>
            </article>
        </div>
    </section>
    <div class="block"> </div>
    <section class="section">
        <div class="contaimer">
            <article class="message is-success">
                <div class="message-header">
                    <p>Config :</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body has-background-dark has-text-white">
                <pre> ${JSON.stringify(response.config,null,5)} 
                </pre></div>
            </article>
        </div>
    </section>
        
        `
    

}

