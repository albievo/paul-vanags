import { Footer } from "./footer";
import { NavBar } from "./nav-bar";

import '../styles/footer.scss';
import '../styles/nav-bar.scss';

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

const navBar = new NavBar();
navBar.load();
console.log('general running');