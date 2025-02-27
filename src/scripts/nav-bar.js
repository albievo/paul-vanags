export class NavBar {

  async load() {
    const $navBar = document.createElement('nav');
    $navBar.classList.add('nav-bar');
    document.getElementById('page-container').prepend($navBar);

    $('.nav-bar').load('nav-bar.html', () => {
      this._addListeners();
    });
  }

  _addListeners() {
    this._addNavBarListeners();
    this._addHamburgerListener();
  }
  
  _addNavBarListeners() {
    console.log('implement nav bar listeners');
  }
  
  _addHamburgerListener() { 
    $('#menu-button').on('click', () => {
      this._toggleSideBar();
    })
  
    $('#full-page-menu-container').on('click', () => {
      this._toggleSideBar();
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