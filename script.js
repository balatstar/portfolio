const navToggle = document.getElementById('navtoggle');
const navToggleClose = document.getElementById('navToggleClose');
const navLinks = document.getElementsByClassName('nav-link');

function navToggles() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('nav-on');
}

navToggle.addEventListener('click', navToggles);
navToggleClose.addEventListener('click', navToggles);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', navToggles);
}

const cardData = [
  {
    title: 'Project name goes here',
    image: 'images/Rectangle21.jpg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    position: 'project-0',
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
    <p>Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>`,
    live: 'https://balatstar.github.io/',
    source: 'https://github.com/balatstar/portfolio',
    modal: 'modal-0',
    thumbnails: ['images/Rectangle21.jpg', 'images/Rectangle21.jpg', 'images/Rectangle21.jpg', 'images/Rectangle21.jpg'],
  },
  {
    title: 'Project name goes here',
    image: 'images/Rectangle34.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    position: 'project-1',
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
    <p>Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>`,
    live: 'https://balatstar.github.io/',
    source: 'https://github.com/balatstar/portfolio',
    modal: 'modal-1',
    thumbnails: ['images/thumb-Rectangle40.png', 'images/thumb-Rectangle40.png', 'images/thumb-Rectangle40.png', 'images/thumb-Rectangle40.png'],
  },
  {
    title: 'Project name goes here',
    image: 'images/project2.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    position: 'project-2',
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
    <p>Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>`,
    live: 'https://balatstar.github.io/',
    source: 'https://github.com/balatstar/portfolio',
    modal: 'modal-2',
    thumbnails: ['images/project2.png', 'images/project2.png', 'images/project2.png', 'images/project2.png'],
  },
  {
    title: 'Project name goes here',
    image: 'images/project3.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    position: 'project-3',
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
    <p>Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>`,
    live: 'https://balatstar.github.io/',
    source: 'https://github.com/balatstar/portfolio',
    modal: 'modal-3',
    thumbnails: ['images/project3.png', 'images/project3.png', 'images/project3.png', 'images/project3.png'],
  },
  {
    title: 'Project name goes here',
    image: 'images/project4.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    position: 'project-4',
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
    <p>Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>`,
    live: 'https://balatstar.github.io/',
    source: 'https://github.com/balatstar/portfolio',
    modal: 'modal-4',
    thumbnails: ['images/project4.png', 'images/project4.png', 'images/project4.png', 'images/project4.png'],
  },
  {
    title: 'Project name goes here',
    image: 'images/project5.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    position: 'project-5',
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
    <p>Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>`,
    live: 'https://balatstar.github.io/',
    source: 'https://github.com/balatstar/portfolio',
    modal: 'modal-5',
    thumbnails: ['images/project5.png', 'images/project5.png', 'images/project5.png', 'images/project5.png'],
  },

];

const postContainer = document.querySelector('.projects-content');
const postContainer2 = document.querySelector('.projects-modal-test');

const postMethods = () => {
  cardData.forEach((postData) => {
    const postElement = document.createElement('article');
    postElement.id = `${postData.position}`;
    postElement.classList.add('projects-content-item');
    postElement.innerHTML = `
  <div class="projects-content-image"><img src="${postData.image}" alt="Project name" /></div>
            <div class="projects-content-group">
              <div class="projects-content-name"><h3>${postData.title}</h3></div>
              <ul class="projects-content-tags">
                <li>${postData.technologies[0]}</li>
                <li>${postData.technologies[1]}</li>
                <li>${postData.technologies[2]}</li>
              </ul>
              <div class="projects-content-button">
                <button class="cta-dark" onclick="modalToggles('${postData.modal}')">See this project <img src="images/ic_arrow_right.svg" alt="See this project" /></button>
              </div>
            </div>
  `;
    postContainer.appendChild(postElement);

    const postElement2 = document.createElement('div');
    postElement2.id = `${postData.modal}`;
    postElement2.classList.add('projects-modal');
    postElement2.innerHTML = `
  <div class="projects-modal-content">
              <div class="projects-modal-close"><a id="modalToggleClose" onclick="modalToggles('${postData.modal}')"><img src="images/Union.png" alt="Close" /></a></div>
              <h3 class="projects-modal-title">${postData.title}</h3>
              <ul class="projects-modal-tags">
              <li>${postData.technologies[0]}</li>
              <li>${postData.technologies[1]}</li>
              <li>${postData.technologies[2]}</li>
              </ul>
              <div class="projects-modal-slider">
                <div class="slider-main">
                  <img src="${postData.image}" />
                </div>
                <div class="slider-thumbs">
                  <div class="slider-thumb"><img src="${postData.thumbnails[0]}" /></div>
                  <div class="slider-thumb"><img src="${postData.thumbnails[1]}" /></div>
                  <div class="slider-thumb"><img src="${postData.thumbnails[2]}" /></div>
                  <div class="slider-thumb"><img src="${postData.thumbnails[3]}" /></div>
                </div>
              </div>
              <div class="projects-modal-description">${postData.description}</div>
              <div class="projects-modal-cta">
                <a href="${postData.live}" class="cta-light" target="_blank">See live <img src="images/ic_link.png" /></a>
                <a href="${postData.source}" class="cta-light" target="_blank">See source <img src="images/ic_github_dark.png" /></a>
              </div>
            </div>
  `;
    postContainer2.appendChild(postElement2);
  });
};
postMethods();

const modalToggleClose = document.getElementById('modalToggleClose');

function modalToggles(popout) {
  const modal = document.getElementById(popout);
  modal.classList.toggle('modal-on');
}

modalToggleClose.addEventListener('click', modalToggles);

const form = document.querySelector('#contact-form');
const email = document.getElementById('email');
const error = document.querySelector('small');

form.addEventListener('submit', function (event) {
 // stop form submission
 event.preventDefault();

 // validate the form
 if (email.value.toLowerCase() !== email.value) {
    event.preventDefault();
    error.innerText = 'Please use all lowercase for email address';
  } else {form.submit()}
});