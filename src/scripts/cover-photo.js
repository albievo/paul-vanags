export class CoverPhoto {

  title;
  description;
  coverPhotoFilePath;
  coverPhotoName;
  profilePic;

  /**
   * 
   * @param {string} title               title of the page
   * @param {string} description         description of the page
   * @param {string} coverPhotoFilePath  file path to the cover photo
   * @param {string} coverPhotoName      name of cover photo
   * @param {boolean} profilePic         whether to add the pfp
   */
  constructor(title, description, coverPhotoFilePath, coverPhotoName, profilePic, height, maxHeight, minHeight) {
    this.title = title;
    this.description = description;
    this.coverPhotoFilePath = coverPhotoFilePath;
    this.coverPhotoName = coverPhotoName;
    this.profilePic = profilePic;
    this.height = height;
    this.maxHeight = maxHeight;
    this.minHeight = minHeight;
  }

  load() {
    const $coverPhoto = document.createElement('section');
    $coverPhoto.id = 'cover-photo-container';
    document.getElementById('content').prepend($coverPhoto);

    $('#cover-photo-container').load('cover-photo.html', () => {
      this._loadPhoto();
      if (this.profilePic) {
        this._loadProfilePic();
      }
      this._addText();
      this._setHeight();
    });
  }

  _loadPhoto() {
    const photo = document.createElement('img');
    photo.src = this.coverPhotoFilePath;
    photo.id = 'cover-photo'
    photo.classList.add('behind-main-shadow');
    photo.classList.add(this.coverPhotoName);
  
    $('#cover-photo-container').append(photo);
  }

  _loadProfilePic() {
    const $profilePicCoverContainer = document.createElement('div');
    $profilePicCoverContainer.id = 'profile-pic-cover-container';

    const $profilePic = document.createElement('img');
    $profilePic.src = 'assets/images/profile-pic.jpg';
    $profilePic.id = 'profile-pic-cover';

    $('#cover-photo-contents').prepend($profilePicCoverContainer)
    $('#profile-pic-cover-container').append($profilePic);
  }

  _addText() {
    $('.name').html(this.title);
    $('.description').html(this.description);
  }

  _setHeight() {
    const $coverPhotoContainer = $('#cover-photo-container');
    $coverPhotoContainer.css('height', this.height);
    $coverPhotoContainer.css('max-height', this.maxHeight);
    $coverPhotoContainer.css('min-height', this.minHeight);

    const $coverPhoto = $('#cover-photo');
    $coverPhoto.css('max-height', this.maxHeight);
    $coverPhoto.css('min-height', this.minHeight);

    console.log(this.maxHeight)
  }
}