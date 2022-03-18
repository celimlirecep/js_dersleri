const slide=document.querySelectorAll(".slide");
let slideNO=0;
const slidesNumber=slide.length;
/*slide codları***********/

function Previous() {
    slideNO--;
    slideShow(slideNO);
    
}
function Next() {
    slideNO++;
    slideShow(slideNO);
}

function slideShow(slideNumber){

    if (slideNO>=slidesNumber) {
        slideNO=0;
    }
   if (slideNumber<0) {
       slideNO=slidesNumber-1;
   }
    for(let i=0;i<4;i++){
        slide[i].style.display="none";
        
    }
    slide[slideNO].style.display="block";
}


