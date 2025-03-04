import { CoverPhoto } from './cover-photo';
import { NavBar } from './nav-bar';

import '../styles/publications.scss';

function addBodyGridListeners() {
  $('#body-grid').children('li').on('click', function () {
    collapseOthers(this);
    $(this).toggleClass('expanded');
    $(this).toggleClass('collapsed');
  });
}

function collapseOthers(ignore) {
  document.querySelectorAll('#body-grid li').forEach(element => {
      if (element !== ignore) {
          element.classList.add('collapsed');
          element.classList.remove('expanded');
      }
  });
}


const topPartHeight = '75vw';
const topPartMaxHeight = '35vh';

const navBar = new NavBar(topPartHeight, topPartMaxHeight);
navBar.load();

const coverPhoto = new CoverPhoto('Paul Vanags', 'Publications', 'assets/images/graphing-cover-photo.jpg', 'graphing-cover-photo', false, topPartHeight, topPartMaxHeight, '10rem');
coverPhoto.load();

addBodyGridListeners();