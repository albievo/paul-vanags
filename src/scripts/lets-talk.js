import { CoverPhoto } from './cover-photo';
import { NavBar } from './nav-bar';

import '../styles/lets-talk.scss';

const topPartHeight = '75vw';
const topPartMaxHeight = '35vh'

const navBar = new NavBar(topPartHeight, topPartMaxHeight);
navBar.load();

const coverPhoto = new CoverPhoto('Paul Vanags', 'Let\'s Talk!', 'assets/images/talking-cover-photo.jpg', 'talking-cover-photo', false, topPartHeight, topPartMaxHeight, '10rem');
coverPhoto.load();

document.getElementById("contact-form").addEventListener("submit", async function (event) {
  console.log('form submitted');
  
  event.preventDefault(); // Prevent default form submission

  const form = event.target;
  const formData = new FormData(form);

  const response = await fetch("https://formspree.io/f/mldgqvge", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
  });

  const statusMessage = document.getElementById("status-message");

  if (response.ok) {
      statusMessage.textContent = "Message sent successfully!";
      statusMessage.style.color = "green";
      form.reset();
  } else {
      statusMessage.textContent = "Oops! Something went wrong.";
      statusMessage.style.color = "red";
  }

  statusMessage.style.display = "block";
});