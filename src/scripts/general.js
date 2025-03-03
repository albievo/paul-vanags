import { Footer } from "./footer";

import '../styles/footer.scss';
import '../styles/nav-bar.scss';
import '../styles/cover-photo.scss';

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