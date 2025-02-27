export class CoverPhoto {

  title;
  description;
  coverPhotoFilePath;
  coverPhotoName;

  /**
   * 
   * @param {string} title               title of the page
   * @param {string} description         description of the page
   * @param {string} coverPhotoFilePath  file path to the cover photo
   * @param {string} coverPhotoName      name of cover photo
   */
  constructor(title, description, coverPhotoFilePath, coverPhotoName) {
    this.title = title;
    this.description = description;
    this.coverPhotoFilePath = coverPhotoFilePath;
    this.coverPhotoName = coverPhotoName;
  }

  load() {
    const $coverPhoto = document.createElement('section');
    $coverPhoto.id = 'cover-photo-container';
    document.getElementById('content').prepend($coverPhoto);

    $('#cover-photo-container').load('cover-photo.html', () => {
      this._loadPhoto();
      this._loadProfilePic();
      this._addText();
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
    const $profilePic = document.createElement('img');
    $profilePic.src = 'assets/images/profile-pic.jpg';
    $profilePic.id = 'profile-pic-cover';

    $('#profile-pic-cover-container').append($profilePic);
  }

  _addText() {
    $('.name').html(this.title);
    $('.description').html(this.description);
  }
}