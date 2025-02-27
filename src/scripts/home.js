import { CoverPhoto } from './cover-photo';

import '../styles/home.scss';

function loadBodyProfilePic() {
  const $profilePicBody = document.createElement('img');
  $profilePicBody.src = 'assets/images/profile-pic.jpg';
  $profilePicBody.id = 'profile-pic-body';

  $('#profile-pic-body-container').append($profilePicBody);
}

const coverPhoto = new CoverPhoto('Paul Vanags', 'birthday boy', 'assets/images/cover-photo.jpg', 'oxford-cover-photo');
coverPhoto.load();

loadBodyProfilePic();