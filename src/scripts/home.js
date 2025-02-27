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

loadCoverPhoto();
loadProfilePics();