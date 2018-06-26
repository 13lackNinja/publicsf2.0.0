document.getElementById('poc-dropdown-arrow').addEventListener('click', dropdown);

function dropdown() {
  const dropdownBox = document.getElementById('poc-dropdown');
  if (dropdownBox.className === '') {
    dropdownBox.style.height = '100px';
    dropdownBox.innerHTML = '<p class="menu-option" onclick="pocSelect(event)">General</p><p class="menu-option" onclick="pocSelect(event)">Booking</p><p class="menu-option" onclick="pocSelect(event)">Lost & Found</p><p class="menu-option" onclick="pocSelect(event)">Rentals</p>';
  }
}

function pocSelect(event) {
  const dropdownBox = document.getElementById('poc-dropdown');
  dropdownBox.innerHTML = '<img src="./images/down_arrow.svg" alt="down_arrow.svg" class="dropdown-arrow" id="poc-dropdown-arrow"><p>' + event.target.innerHTML + '</p>';
  dropdownBox.style.height = '30px';
  document.getElementById('poc-dropdown-arrow').addEventListener('click', dropdown);
}
