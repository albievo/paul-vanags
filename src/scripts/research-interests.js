import { CoverPhoto } from './cover-photo';
import { NavBar } from './nav-bar'

import '../styles/research-interests.scss';

const topPartHeight = '75vw';
const topPartMaxHeight = '35vh'

const navBar = new NavBar(topPartHeight, topPartMaxHeight);
navBar.load();

const coverPhoto = new CoverPhoto('Paul Vanags', 'Research Interests', 'assets/images/books-cover-photo.jpg', 'books-cover-photo', false, topPartHeight, topPartMaxHeight, '10rem');
coverPhoto.load();