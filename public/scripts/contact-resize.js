
document.addEventListener("DOMContentLoaded", contactSize);

function contactSize () {
  let contactSection = document.getElementById("contact-section");
  const headerHeight = document.getElementById("header").clientHeight;
  const bodyHeight = document.getElementById("body").clientHeight;
  contactSection.style.height = (bodyHeight - headerHeight) + "px";
}
