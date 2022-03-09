const yeniListeElemanı=document.createElement('li');
yeniListeElemanı.className='liste-item';
yeniListeElemanı.textContent='Sivas';
yeniListeElemanı.id='memleket'
//yeniListeElemanı.setAttribute('deger','yeni-deger');
document.querySelector('ul').appendChild(yeniListeElemanı)
console.log(yeniListeElemanı);
document.querySelector('h2').textContent='text ekleme';

const yenibaslik=document.createElement('h3');
yenibaslik.textContent='heyhoo';

//document.querySelector('body').replaceChild(yenibaslik,document.querySelector('h2'));

//const listekaldır= document.querySelector('li').remove()
document.querySelector('ul').removeChild(document.querySelectorAll('li')[2])