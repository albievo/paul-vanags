import { Footer } from './footer';

import '../styles/home.scss';

function loadCoverPhoto() {
  const coverPhoto = document.createElement('img');
  coverPhoto.src = 'assets/images/cover-photo.webp';
  coverPhoto.id = 'cover-photo'

  $('#cover-photo-container').append(coverPhoto);
}

loadCoverPhoto();

const footer = new Footer();
footer.load();