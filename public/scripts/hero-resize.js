
document.addEventListener("DOMContentLoaded", heroSize);

function heroSize () {
  let hero = document.getElementById("hero");
  const headerHeight = document.getElementById("header").clientHeight;
  const bodyHeight = document.getElementById("body").clientHeight;
  hero.style.height = (bodyHeight - headerHeight) + "px";
}
