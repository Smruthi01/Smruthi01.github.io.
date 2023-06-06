// Set the date we're counting down to
var countDownDate = new Date("July 9, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =  days + "d: " + hours + "h: "
  + minutes + "m: " + seconds + "s";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Today is Our Big Day! Come Join Us!";
  }
}, 1000);


// 2nd slide
// let slideIndex = 0;
// let timeoutId = null;
// const slides = document.getElementsByClassName("mySlides");
// const dots = document.getElementsByClassName("dot");

// showSlides();
// function currentSlide(index) {
//      slideIndex = index;
//      showSlides();
// }
// function plusSlides(step) {
  
//   if(step < 0) {
//       slideIndex -= 2;
      
//       if(slideIndex < 0) {
//         slideIndex = slides.length - 1;
//       }
//   }
  
//   showSlides();
// }
