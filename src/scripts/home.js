import '../styles/home.scss';

function loadCoverPhoto() {
  const coverPhoto = document.createElement('img');
  coverPhoto.src = 'assets/images/cover-photo.jpg';
  coverPhoto.id = 'cover-photo'
  coverPhoto.classList.add('behind-main-shadow');

  $('#cover-photo-container').append(coverPhoto);
}

function loadProfilePics() {
  const $profilePicCover = document.createElement('img');
  const $profilePicBody = document.createElement('img');

  $profilePicCover.src = 'assets/images/profile-pic.jpg';
  $profilePicBody.src = 'assets/images/profile-pic.jpg';


  $profilePicCover.id = 'profile-pic-cover';
  $('#profile-pic-cover-container').append($profilePicCover);

  $profilePicBody.id = 'profile-pic-body';
  $('#profile-pic-body-container').append($profilePicBody);
}

function addListeners() {
  addNavBarListeners();
  addHamburgerListener();
}

function addNavBarListeners() {
  console.log('implement nav bar listeners');
}

function addHamburgerListener() {
  let menuDisplayed = false;

  $('#menu-button').on('click', () => {
    toggleSideBar();
  })

  $('#full-page-menu-container').on('click', () => {
    toggleSideBar();
  })
}

function toggleSideBar() {
  const menuContainer = document.getElementById('full-page-menu-container');
  const menuButton = document.getElementById('menu-icon');

  menuContainer.classList.toggle('closed-page-container');
  menuContainer.classList.toggle('open-page-container');

  menuButton.classList.toggle('open');
  menuButton.classList.toggle('closed');
}

loadCoverPhoto();
loadProfilePics();
addListeners();