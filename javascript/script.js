// HEADER //
var header = document.getElementById("myHeader");

 // STICKY-HEADER // 
window.onscroll = function() {myFunction()};

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//STARTING SECTION ONE BELOW STICKY HEADER //
var belowHeader = header.nextElementSibling;

belowHeader.style.marginTop = header.clientHeight +"px";


// HOMEPAGE-SECTION-ONE-BACKGROUND CAROUSEL //
var slider_content = document.getElementById("homepage-background");
var image=['banner-background' , 'sample-1' , 'sample-2' , 'sample-3' , 'sample-4'];
var i = 0;
function carousel(direction) {
  if(direction === 'next') {
    /* 
      1- i less than image length => increament the i
      2- i equal to image length => set i to 0
    */
   if(i === image.length - 1) {
    i = 0;
   } else {
     i++;
   }
  } else {
    /*
      if i ==0 then got last length index
      if i < 0 then decremenet i
    */
      if(i === 0) {
        i = image.length - 1;
      } else {
        i--;
      }
  }
  slider_content.src = `./images/${image[i]}.png`;
}


// SLICK-SLIDER //
$('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 1, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  variableWidth: true,
  // centerMode: true,
  arrows: false,
  dots: true // Adds the dots on the bottom
});

// CONTACT-US-PAGE-RANGE-SELECTOR //
var sliderOne= document.getElementById("sliderOne");
var sliderTwo= document.getElementById("sliderTwo");

var progressBarOne = document.getElementById("progressBarOne");
var progressBarTwo = document.getElementById("progressBarTwo");


sliderOne.oninput = function(){
  progressBarOne.style.width =this.value + "%";
}
sliderTwo.oninput = function(){
  progressBarTwo.style.width =this.value + "%";
}

