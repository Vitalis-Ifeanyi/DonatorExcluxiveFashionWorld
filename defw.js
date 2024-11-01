function changeTheme() {
    // Get the stylesheet and toggle image
  const stylesheet = document.getElementById("stylesheet"),
    lighttheme = document.getElementById("lighttheme");
    // Light and Dark theme toggle and change the toggle image source
  if (stylesheet.href.includes("/light.css")) {
    stylesheet.href = "./dark.css";
    lighttheme.src = "./images/light.png";
  } else if ((stylesheet.href = "/dark.css")) {
    stylesheet.href = "./light.css";
    lighttheme.src = "/images/waning-moon.png";
  }
}



function videoToggle(){
    // Get the video and button
const video = document.getElementById("myVideo");
const btn = document.getElementById("btn");
const toggleImage = document.getElementById("toggleImage")
// Pause and play the video, and change the button image
  if (!(video.paused)) {
    video.pause();
    toggleImage.src = 'images/play-buttton.png'
    }
    else{
    video.play();
    toggleImage.src = 'images/video-pause-button.png'
   }
}
// Hamburger onclick function
function showMenu(){
  const menuLinks = document.getElementById('menulinks');
  if(menuLinks.style.height === "0px"){
    menuLinks.style.height = "500px"
  }
  else{
    menuLinks.style.height = "0px"
  }
}
// Quote generation function
function GenerateQuotes(){
  const quotes = document.getElementById('quotes');
  const shoeQuotes = [
    "Step into style with every stride.",
    "Comfort meets fashion in every pair.",
    "Walk your way to confidence.",
    "Designed for the bold, worn by the brave.",
    "Put your best foot forward in luxury.",
    "Sole crafted for every adventure.",
    "Make every step count.",
    "Shoes that speak louder than words.",
    "From the ground up, you deserve the best.",
    "The perfect pair for every occasion.",
    "Walk in style, walk in comfort.",
    "Where elegance meets endurance.",
    "Experience comfort like never before.",
    "Because great shoes take you great places.",
    "The road to success begins with the right shoes.",
    "Unleash your potential with every step.",
    "Fashion on your feet, comfort in your soul.",
    "For those who dare to be different.",
    "Shoes that define your journey.",
    "Elevate your walk, elevate your life."
];
let randomQuotes = shoeQuotes[ Math.floor(Math.random() * shoeQuotes.length)]
quotes.innerHTML = randomQuotes;


}
setInterval(GenerateQuotes, 4850)