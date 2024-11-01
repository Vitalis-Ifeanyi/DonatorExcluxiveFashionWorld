function changeTheme() {
    // Get the stylesheet and toggle image
  const stylesheet = document.getElementById("stylesheet"),
    lighttheme = document.getElementById("lighttheme");
    // Light and Dark theme toggle and change the toggle image source
  if (stylesheet.href.includes("/contactlight.css")) {
    stylesheet.href = "./contactdark.css";
    lighttheme.src = "./images/light.png";
  } else if ((stylesheet.href = "/contactdark.css")) {
    stylesheet.href = "./contactlight.css";
    lighttheme.src = "/images/waning-moon.png";
  }
}

function showMenu(){
  const menuLinks = document.getElementById('menulinks');
  if(menuLinks.style.height === "0px"){
    menuLinks.style.height = "500px"
  }
  else{
    menuLinks.style.height = "0px"
  }
}