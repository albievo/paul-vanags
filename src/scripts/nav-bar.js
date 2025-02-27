import { getPageName } from "./utils/getPageName";

export class NavBar {

  async load() {
    const $navBar = document.createElement('nav');
    $navBar.classList.add('nav-bar');
    document.getElementById('page-container').prepend($navBar);

    $('.nav-bar').load('nav-bar.html', () => {
      this._addListeners();
      this._highlightCurrentPage();
    });
  }

  _addListeners() {
    this._addNavBarListeners();
    this._addHamburgerListener();
  }

  _highlightCurrentPage() {
    const pageName = getPageName() || 'home';
    this._highlightPage(pageName);
  }

  _highlightPage(pageName) {
    $(`.${pageName}-link`).css('font-weight', 700);
  }
  
  _addNavBarListeners() {
    $('.home-link').on('click', () => {
      window.location.assign('/');
    });
    $('.research-interests-link').on('click', () => {
      window.location.assign('research-interests.html');
    });
    $('.publications-link').on('click', () => {
      window.location.assign('publications.html');
    });
    $('.cv-link').on('click', () => {
      window.location.assign('cv.html');
    });
    $('.lets-talk-link').on('click', () => {
      window.location.assign('lets-talk.html');
    });
  }
  
  _addHamburgerListener() { 
    $('#menu-button').on('click', () => {
      this._toggleSideBar();
    })
    
    $('#full-page-menu-container').on('click', (event) => {
      if (!$(event.target).closest('#full-page-menu').length) {
        this._toggleSideBar();
      }
    })
  }
  
  _toggleSideBar() {
    const menuContainer = document.getElementById('full-page-menu-container');
    const menuButton = document.getElementById('menu-icon');
  
    menuContainer.classList.toggle('closed-page-container');
    menuContainer.classList.toggle('open-page-container');
  
    menuButton.classList.toggle('open');
    menuButton.classList.toggle('closed');
  }
}