document.querySelector('.link').addEventListener('dblclick',tiklanma);

function tiklanma(e){

    let deger=e.type;
    console.log(deger);
    e.preventDefault();

}
document.querySelector('.container').addEventListener('mousemove',arkaplanrenginidegistir);
function arkaplanrenginidegistir(e)
{
console.log(e);
document.querySelector('.yazi').textContent=`X: ${e.clientX} Y: ${e.clientY}`;
document.querySelector('.container').style.backgroundColor=`rgb(${e.clientX%255},${e.clientY%255},${(e.clientX+e.clientY)%255})`;

}