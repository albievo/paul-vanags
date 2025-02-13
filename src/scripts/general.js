import { Footer } from "./footer";

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