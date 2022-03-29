let slideIndex=0;
var allSlides=$(".slide");
showSlide(0);


$(".nextSlide").click(function () {
    if (slideIndex==allSlides.length-1) {
        slideIndex=-1
    }
    console.log(slideIndex)
    
    showSlide(++slideIndex);
})
$(".prevSlide").click(function () {
    if (slideIndex==0) {
        slideIndex=allSlides.length;
    }
  
    showSlide(--slideIndex);
})

function showSlide(n) {
   
    for (let i = 0; i < allSlides.length; i++) {
     //  allSlides[i].style.display="none";
       $(".slide").eq(i).hide(1000);
     
        
    }
    $(".slide").eq(n).show(1000);
}

$(".slide").eq(0).hide;

$(".dot").click(function () {

    slideIndex=$(this).index();
    showSlide(slideIndex);
})

