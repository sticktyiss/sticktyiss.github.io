const homeImg = document.querySelector("#sideBar img");
const sideBarBtn = document.querySelectorAll("#sideBar button");
const introBtn = document.querySelector("#introBtn");
const projectsBtn = document.querySelector("#projectsBtn");
const skillsBtn = document.querySelector("#skillsBtn");
const certsBtn = document.querySelector("#certsBtn");
const contactBtn = document.querySelector("#contactBtn");
const sideBar = document.querySelector("#sideBar");
const home = document.querySelector("#home");
const intro = document.querySelector("#intro");
const projects = document.querySelector("#projects");
const skills = document.querySelector("#skills");
const certificates = document.querySelector("#certificates");
const contact = document.querySelector("#contact");
const linkedin = document.querySelector("#linkedin");
const github = document.querySelector("#github");
const linktree = document.querySelector("#linktree");

// CIRCLE BUTTON ANIMATION
const buttonFX = (x, y, color1, color2, index) => {
  const circle = document.createElement("div");
  const diameter =
    Math.max(document.documentElement.clientWidth, window.innerWidth) * 2;
  const xPos = x;
  const yPos = y;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.position = "fixed";
  circle.style.top = `${yPos - diameter / 2}px`;
  circle.style.left = `${xPos - diameter / 2}px`;
  circle.style.borderRadius = "50%";
  circle.style.backgroundColor = color1;
  circle.style.transform = "scale(0)";
  circle.style.zIndex = 11;
  document.body.appendChild(circle);
  setTimeout(() => {
    circle.style.transitionDuration = ".5s";
    circle.style.transform = "scale(1)";
  }, 100);
  setTimeout(() => {
    circle.style.transitionDuration = ".5s";
    circle.style.transform = "scale(0)";
    document.body.style.backgroundColor = color1;
    sideBar.style.backgroundColor = color1;
    sideBarBtn.forEach(button => {
      button.style.color = color2;
      button.style.backgroundColor = color1;
      button.style.border = ".2em solid";
      button.style.borderColor = color2;
      button.style.setProperty('--shadowColor', color2);
    });
    if (index != "intro") {
      sideBarBtn[index].style.color = color1;
      sideBarBtn[index].style.backgroundColor = color2;
    }
    document.querySelector("main").style.backgroundColor = color2;
    homeImg.style.border = `.8vw solid ${color2}`;
  }, 500);
  setTimeout(() => {
    circle.style.display = "none";
  }, 2000);
};
const hideAll = () => {
  home.style.display = "none";
  intro.style.display = "none";
  projects.style.display = "none";
  skills.style.display = "none";
  certificates.style.display = "none";
  contact.style.display = "none";
};
const showSection = (sect) => {
  hideAll();
  sect.style.display = "flex";
};
// WORD WAVE ANIMATION
const wordElement = document.getElementById("wizard");
let amplitude = 3; // Adjust the value to control the height of the wave
let frequency = 0.25; // Adjust the value to control the speed of the wave
function animateWave() {
  const word = wordElement.innerText;
  let waveText = "";
  for (let i = 0; i < word.length; i++) {
    const offset = amplitude * Math.sin(frequency + (i + 0.5));
    waveText += `<span style="position:relative; top:${offset}px">${word[i]}</span>`;
  }
  wordElement.innerHTML = waveText;
  // Update the amplitude and frequency for different effects
  // amplitude += .01;
  frequency += 0.1;

  requestAnimationFrame(animateWave);
}
animateWave();

// CERTIFICATE IMAGE ENLARGEMENT
certImages = document.querySelectorAll(".certs");
// console.log(certImages);
for (let i = 0; i < certImages.length; i++) {
  certImages[i].addEventListener("click", function () {
    if (!certImages[i].classList.contains("enlarged")) {
      // Enlarge the image
      certImages[i].classList.add("enlarged");
    } else {
      // Restore the image to normal size
      certImages[i].classList.remove("enlarged");
    }
  });
}

// Invoke the starting page
showSection(home);

homeImg.addEventListener("click", (e) => {
  buttonFX(e.clientX, e.clientY, "#ebbab9", "#945659", "intro");
  setTimeout(() => {
    showSection(home);
  }, 500);
});
introBtn.addEventListener("click", (e) => {
  buttonFX(e.clientX, e.clientY, "#363634", "#945659", 0);
  setTimeout(() => {
    showSection(intro);
  }, 500);
});
projectsBtn.addEventListener("click", (e) => {
  buttonFX(e.clientX, e.clientY, "#945659", "#120e0e", 1);
  setTimeout(() => {
    showSection(projects);
  }, 500);
});
skillsBtn.addEventListener("click", (e) => {
  buttonFX(e.clientX, e.clientY, "#643738", "#ebbab9", 2);
  setTimeout(() => {
    showSection(skills);
  }, 500);
});
certsBtn.addEventListener("click", (e) => {
  buttonFX(e.clientX, e.clientY, "#120e0e", "#ebbab9", 3);
  setTimeout(() => {
    hideAll();
    showSection(certificates);
  }, 500);
});
contactBtn.addEventListener("click", (e) => {
  buttonFX(e.clientX, e.clientY, "#ebbab9", "#363634", 4);
  setTimeout(() => {
    showSection(contact);
  }, 500);
});

linkedin.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/tyiss-goodman-6771b31a9/");
});
github.addEventListener("click", () => {
  window.open("https://github.com/sticktyiss");
});