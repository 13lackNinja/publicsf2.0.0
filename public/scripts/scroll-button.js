
// Adds scrolling functionality to arrow buttons on rental info page

const dividers = Array.from(document.getElementsByClassName('divider'));

// Add listeners to up arrows
for (i = 0; i < dividers.length; i++) {
  const button = dividers[i].querySelector('.up-arrow-button');
  if (button) {
    button.addEventListener('click', scrollUp);
  }
}

// Add listeners to down arrows
for (i = 0; i < dividers.length; i++) {
  const button = dividers[i].querySelector('.down-arrow-button');
  if (button) {
    button.addEventListener('click', scrollDown);
  }
}

// Scroll up function
function scrollUp(e) {
  const previousDivider = e.target.parentNode.previousElementSibling;
  const options = {
    behavior: 'smooth',
    block: 'end'
  }
  previousDivider.scrollIntoView(options);
}

// Scroll down function
function scrollDown(e) {
  const nextDivider = e.target.parentNode.nextElementSibling;
  const options = {
    behavior: 'smooth',
    block: 'end'
  }
  nextDivider.scrollIntoView(options);
}
