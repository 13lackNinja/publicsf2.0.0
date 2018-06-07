function openMenu() {
  const topNav = document.getElementById('topnav');
  const menuIcon = document.getElementById('menu-icon');
  const connectLink = document.getElementsByClassName('nav-link').item(0);
  const eventsLink = document.getElementsByClassName('nav-link').item(1);
  const local161Link = document.getElementsByClassName('nav-link').item(2);

  if (topNav.className === 'topnav') {
    topNav.className += ' responsive';
    menuIcon.style.transform = 'rotate(90deg)';
  } else {
    topNav.className = 'topnav';
    menuIcon.style.transform = '';
  }
}
