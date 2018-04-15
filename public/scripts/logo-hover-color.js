
const homeLink = document.getElementById("home-link");
const headerLogo = document.getElementById("header-logo");

homeLink.addEventListener("mouseenter", changeColor);
homeLink.addEventListener("mouseleave", changeColor);

function changeColor() {

  const logoStyle = window.getComputedStyle(headerLogo);
  const logoColor = logoStyle.getPropertyValue("fill");

  if (logoColor == "rgb(255, 255, 255)") {
    headerLogo.style.fill = "rgb(236,68,35)";
    headerLogo.style.stroke = "rgb(236,68,35)";
  } else {
    headerLogo.style.fill = "rgb(255, 255, 255)";
  }
}
