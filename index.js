const myCarousel = document.getElementById('myCarousel');

//Obtain width of Screen [768]
let screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;


if(screenWidth <= 500)
{
  myCarousel.style.display = 'none';
}