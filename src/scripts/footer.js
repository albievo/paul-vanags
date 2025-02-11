/**
 * Common page footer
 */
export class Footer {
  socials;

  /**
   * Creates a Footer instance.
   * @param {Array<{ socialName: string, socialLink: string }>} socials - List of social media objects.
   */
  constructor(socials) {
    this.socials = socials;
  }

  async load() {
    const $footer = document.createElement('footer');
    $footer.classList.add('footer');
    $footer.classList.add('behind-main-shadow');
    document.getElementById('page-container').appendChild($footer);

    $('.footer').load('footer.html', () => {
      this._loadSocials();
      this._loadFooterImage();
    });
    }

  _loadSocials() {
    for (let idx = 0; idx < this.socials.length; idx++) {
      // create list element
      const $listItem = document.createElement('li');
      $listItem.classList.add(`${this.socials[idx].socialName}-li`);

      // create anchor element and add it to li
      const $link = document.createElement('a');
      $link.href = this.socials[idx].socialLink;
      $link.target = '_blank'
      $link.classList.add(`${this.socials[idx].socialName}-link`);
      $listItem.appendChild($link);

      // create image element and add it to a
      const $icon = document.createElement('img');
      $icon.src = `assets/icons/${this.socials[idx].socialName}.png`;
      $icon.classList.add(`${this.socials[idx].socialName}-img`);
      $link.appendChild($icon);

      $('.socials-list').append($listItem);
    }
  }

  _loadFooterImage() {
    const $img = document.createElement('img');
    $img.src = 'assets/images/footer-photo.jpg';

    $('.footer-photo-wrapper').append($img);
  }
}