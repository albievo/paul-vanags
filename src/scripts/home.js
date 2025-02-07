import { Footer } from './footer';

import '../styles/home.scss';

function loadCoverPhoto() {
  const coverPhoto = document.createElement('img');
  coverPhoto.src = 'assets/images/cover-photo.jpg';
  coverPhoto.id = 'cover-photo'
  coverPhoto.classList.add('behind-main-shadow');

  $('#cover-photo-container').append(coverPhoto);
}

loadCoverPhoto();

const footer = new Footer([
  {
    socialName: 'bluesky',
    socialLink: 'http://@paulvanags.bsky.social'
  },
  {
    socialName: 'linkedin',
    socialLink: 'https://www.linkedin.com/in/paulvanags/'
  }
]);
footer.load();