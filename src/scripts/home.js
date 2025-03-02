import { CoverPhoto } from './cover-photo';
import { NavBar } from './nav-bar';

import '../styles/home.scss';

function loadBodyProfilePic() {
  const $profilePicBody = document.createElement('img');
  $profilePicBody.src = 'assets/images/profile-pic.jpg';
  $profilePicBody.id = 'profile-pic-body';

  $('#profile-pic-body-container').append($profilePicBody);
}

const navBar = new NavBar('67vw', '50vh');
navBar.load();

const coverPhoto = new CoverPhoto('Paul Vanags', 'birthday boy', 'assets/images/cover-photo.jpg', 'oxford-cover-photo', true, '67vw', '50vh', '20rem');
coverPhoto.load();

loadBodyProfilePic();