const homeImg = document.querySelector('#sideBar img');
const introBtn = document.querySelector('#introBtn');
const projectsBtn = document.querySelector('#projectsBtn');
const skillsBtn = document.querySelector('#skillsBtn');
const contactBtn = document.querySelector('#contactBtn');
const sideBar = document.querySelector('#sideBar');
const home = document.querySelector('#home')
const intro = document.querySelector('#intro')
const projects = document.querySelector('#projects')
const skills = document.querySelector('#skills')
const contact = document.querySelector('#contact')
const linkedin = document.querySelector('#linkedin')
const github = document.querySelector('#github')
const linktree = document.querySelector('#linktree')


const buttonFX = (x, y, color1, color2) => {
  const circle = document.createElement('div');
  const diameter = Math.max(document.documentElement.clientWidth, window.innerWidth) * 2;
  const xPos = x;
  const yPos = y;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.position = 'fixed';
  circle.style.top = `${yPos - diameter/2}px`;
  circle.style.left = `${xPos - diameter/2}px`;
  circle.style.borderRadius = '50%';
  circle.style.backgroundColor = color1;
  circle.style.transform = 'scale(0)';
  circle.style.zIndex = 11;
  document.body.appendChild(circle);
  setTimeout(() => {
    circle.style.transitionDuration = '1.25s';
    circle.style.transform = 'scale(2)';
  }, 100);
  setTimeout(() => {
    circle.style.transitionDuration = '.75s';
    circle.style.transform = 'scale(0)';
    document.body.style.backgroundColor = color1;
    sideBar.style.backgroundColor = color1;
    document.querySelector('main').style.backgroundColor = color2
    homeImg.style.border = `.8vw solid ${color2}`;
  }, 1250);
  setTimeout(() => {
    circle.style.display = 'none';
  }, 2000);
}
const hideAll = () => {
  home.style.display = 'none'
  intro.style.display = 'none'
  projects.style.display = 'none'
  skills.style.display = 'none'
  contact.style.display = 'none'
}
const showSection = (sect) => {
  sect.style.display = 'flex'
  // sect.style.flexDirection = 'column'
}


homeImg.addEventListener('click', (e) => {
  buttonFX(e.clientX, e.clientY, '#ebbab9', '#945659')
  setTimeout(() => {
    hideAll()
    showSection(home)
  }, 1000);
});
introBtn.addEventListener('click', (e) => {
  buttonFX(e.clientX, e.clientY, '#363634', '#945659')
  setTimeout(() => {
    hideAll()
    showSection(intro)
}, 1000);
});
projectsBtn.addEventListener('click', (e) => {
  buttonFX(e.clientX, e.clientY, '#945659', '#120e0e')
  setTimeout(() => {
    hideAll()
    showSection(projects)
}, 1000);
});
skillsBtn.addEventListener('click', (e) => {
  buttonFX(e.clientX, e.clientY, '#643738', '#ebbab9')
  setTimeout(() => {
    hideAll()
    showSection(skills)
}, 1000);
});
contactBtn.addEventListener('click', (e) => {
  buttonFX(e.clientX, e.clientY, '#120e0e', '#363634')
  setTimeout(() => {
    hideAll()
    showSection(contact)
}, 1000);
});

linkedin.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/tyiss-goodman-6771b31a9/')
});
github.addEventListener('click', () => {
  window.open('https://github.com/sticktyiss')
});
linktree.addEventListener('click', () => {
  window.open('https://linktr.ee/theorylinks')
});