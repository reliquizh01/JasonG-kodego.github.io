const leftRestoAds = document.getElementById("LeftRestoAdvertisement");
const rightRestoAds = document.getElementById("RightRestoAdvertisement");
const restaurantsMenu = document.getElementById("restaurantsMenu");

//Obtain width of Screen [768]
let screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

if(screenWidth <= 500)
{
    restaurantsMenu.classList.remove('col-6');
    restaurantsMenu.classList.add('col-12');

}
if(screenWidth > 500 && screenWidth <= 1000)
{
    rightRestoAds.style.display = "none";
    leftRestoAds.style.display = "block";
    restaurantsMenu.classList.remove('col-6');
    restaurantsMenu.classList.add('col-9');
}
else{
    rightRestoAds.style.display = "block";
    leftRestoAds.style.display = "block";
}