

function GetJsonFromApi(){
     
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body: JSON.stringify({
            title:"recep Çelimli",
            body:"nasıl gidiyo dersler",
            userId:12
            
        }),
         headers : {"Content-Type":"application/json"}
    })
    .then(res=>res.json())
    .then(data=> {
        console.log(data)
        
    })
}