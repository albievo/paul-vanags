import { getPageName } from "./utils/getPageName";

export class NavBar {

  currentTopStyle;

  /**
   * 
   * @param {string} coverPhotoHeight the height of the cover photo on the page in scss units
   * 
   */
  constructor(coverPhotoHeight, coverPhotoMaxHeight) {
    this.coverPhotoHeight = coverPhotoHeight;
    this.coverPhotoMaxHeight = coverPhotoMaxHeight;
  }

  async load() {
    const $navBar = document.createElement('nav');
    $navBar.classList.add('nav-bar');
    document.getElementById('page-container').prepend($navBar);

    $('.nav-bar').load('nav-bar.html', () => {
        this._highlightCurrentPage();
        this._adjustHeight();
        this._addListeners();
    });
  }

  _addListeners() {
    this._addNavBarListeners();
    this._addHamburgerListener();
    this._addScrollListeners();
    this._addResizeListeners();
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

  _addScrollListeners() {
    const navBar = document.querySelector(".nav-bar");
    const navBarOffset = navBar.offsetTop;
    const navBarStickyOffset = 10;

    $(window).on('scroll', () => {
      if (this.currentTopStyle !== '0px') {
        if (window.scrollY > navBarOffset - navBarStickyOffset) {
          navBar.classList.add("sticky");
          $(navBar).css('top', `${navBarStickyOffset}px`);
        } else {
          navBar.classList.remove("sticky");
          $(navBar).css('top', this._calcTopStyle());
        }
      }
    })
  }

  _adjustHeight() {
    const topStyle = this._calcTopStyle();
    if (topStyle !== this.currentTopStyle) {
      $('.nav-bar').css('top', this._calcTopStyle());
      this.currentTopStyle = topStyle;
    }
  }

  _calcTopStyle() {
    const mediaQuery = window.matchMedia('(max-width: 49.99em)');
    
    if (mediaQuery.matches) {
      return '0px'; // Apply top = 0 when the media query is true
    }
  
    if (!this.topStyle) {
      const computedStylesNavBar = getComputedStyle(document.querySelector('.nav-bar'));
      const computedStylesNavBarBox = getComputedStyle(document.querySelector('.nav-bar-box'))
      const topBottomPadding = computedStylesNavBarBox.paddingTop || '0px';
      const fontSize = computedStylesNavBar.fontSize || '16px';
        
      this.topStyle = `min(calc(${this.coverPhotoHeight} - ${topBottomPadding} - ${fontSize} / 2), calc(${this.coverPhotoMaxHeight} - ${topBottomPadding} - ${fontSize} / 2))`;
    }
  
    return this.topStyle;
  }

  _addResizeListeners() {
    $(window).on('resize', () => {
      this._adjustHeight();
    })
  }
}