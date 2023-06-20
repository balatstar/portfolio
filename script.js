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

const projectItems = [
    {
      projtitle: 'Project name goes here',
      projtechnologies: ['HTML/CSS','Ruby on Rails','Javascript'],
      projimage: 'images/Rectangle21.jpg',
      projdescription: 'asdfghjklgfdsdfghjkl',
      projgridposition: 'project-0'
    }
  ]
  
  const projectContainer = document.querySelector('.projects-content');
  
  const projectDetails = ()=>{
    projectItems.map((postData)=>{
      const projectElement = document.createElement('article');
      projectElement.classList.add('.projects-content-item ');
      projectElement.innerHTML = `
      <div class="projects-content-image"><img src=${postData.projimage} alt="Project name" /></div>
              <div class="projects-content-group">
                <div class="projects-content-name"><h3>${postData.projtitle}</h3></div>
                  <ul class="projects-content-tags">
                    <li>${postData.projtechnologies[0]}</li>
                    <li>${postData.projtechnologies[1]}</li>
                    <li>${postData.projtechnologies[2]}</li>
                  </ul>
                <div class="projects-content-button">
                  <button class="cta-dark">See this project <img src="images/ic_arrow_right.svg" alt="See this project" /></button>
                </div>      
              </div>`
      projectContainer.appendChild(projectElement);
  
    })
  }
  projectDetails()