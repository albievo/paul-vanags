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
    document.getElementById('page-container').appendChild($footer);

    await $('.footer').load('footer.html');
  }
}