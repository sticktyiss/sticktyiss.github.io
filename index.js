const homeImg = document.querySelector('#sideBar img');
const introBtn = document.querySelector('#introBtn');
const projectsBtn = document.querySelector('#projectsBtn');
const skillsBtn = document.querySelector('#skillsBtn');
const contactBtn = document.querySelector('#contactBtn');
const sideBar = document.querySelector('#sideBar');


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
    circle.style.transitionDuration = '1s';
    circle.style.transform = 'scale(1)';
  }, 100);
  setTimeout(() => {
    circle.style.transitionDuration = '1s';
    circle.style.transform = 'scale(0)';
    document.body.style.backgroundColor = color1;
    sideBar.style.backgroundColor = color1;
    document.querySelector('main').style.backgroundColor = color2;
  }, 1000);
  setTimeout(() => {
    circle.style.display = 'none';
  }, 2000);
}

homeImg.addEventListener('click', (e) => {
  buttonFX(e.clientX, e.clientY, '#ebbab9', '#945659')});
introBtn.addEventListener('click', (e) => {
  buttonFX(e.clientX, e.clientY, '#363634', '#643738')});
projectsBtn.addEventListener('click', (e) => {
  buttonFX(e.clientX, e.clientY, '#945659', '#120e0e')});
skillsBtn.addEventListener('click', (e) => {
  buttonFX(e.clientX, e.clientY, '#643738', '#ebbab9')});
contactBtn.addEventListener('click', (e) => {
  buttonFX(e.clientX, e.clientY, '#120e0e', '#363634')});