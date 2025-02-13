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
    if (!menuDisplayed) {
      openSideBar();
      menuDisplayed = true;
    } else {
      closeSideBar();
      menuDisplayed = false;
    }
  })

  $('#full-page-menu-container').on('click', () => {
    closeSideBar();
    menuDisplayed = false;
  })
}

function openSideBar() {
  $('#full-page-menu-container').attr('hidden', false);
  $('#menu-button').html(
    '<svg id="close-icon" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/><path d="M6 18L18 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/></svg>'
  )
}

function closeSideBar() {
  $('#full-page-menu-container').attr('hidden', true);
  $('#menu-button').html(
    '<svg id="hamburger-menu-icon" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></svg>'
  )
}

loadCoverPhoto();
loadProfilePics();
addListeners();