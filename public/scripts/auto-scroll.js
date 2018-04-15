scroll();

function scroll() {

  const windowWidth = window.innerWidth;
  const text = document.getElementById("statement-text");
  let pos = 0;
  const id = setInterval(scroll, 20);

  function scroll() {
    if (pos == -1850) {
      pos = pos + 1850 + windowWidth;
    } else {
      pos--;
      text.style.left = pos + "px";
    }
  }
}
