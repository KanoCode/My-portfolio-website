const menuBtnIcon = document.querySelector("i");
const menuBtnClass = menuBtnIcon.classList[1];
const mobileNav = document.querySelector(".navMenu");

function switchIcons() {
  if (menuBtnClass == "fa-bars") {
    menuBtnIcon.classList.toggle("fa-times");
  }
}

mobileNav.addEventListener("click", () => {
  switchIcons();
  if (mobileNav.classList.contains("active")) {
    mobileNav.classList.remove("active");
  } else {
    mobileNav.classList.add("active");
  }
});

/*Projects Section*/

//Array of objects for section content

const cardsObjects = [
  {
    postTitle: "Multi Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    popupImageUrlMobile: "./assets/SnapshootPortfolioMobi.png",
    popupImageUrlDesktop: "./assets/Snapshoot-portfolio-desktop.png",
    technologiesPopup: ["html", "css", "Ruby on rails", "Github"],
    languages: ["html", "css", "javaScript", "bootstrap"],
    linkLive: "https://butlermuwo.github.io/Portfolio/",
    linkSource: "https://butlermuwo.github.io/Portfolio/",
    position: "one",
  },
  {
    postTitle: "Multi Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    popupImageUrlMobile: "./assets/SnapshootPortfolioMobi.png",
    popupImageUrlDesktop: "./assets/Snapshoot-portfolio-desktop.png",
    technologiesPopup: ["html", "css", "Ruby on rails", "Github"],
    languages: ["html", "css", "javaScript", "bootstrap"],
    linkLive: "https://butlermuwo.github.io/Portfolio/",
    linkSource: "https://butlermuwo.github.io/Portfolio/",
    position: "one",
  },
  {
    postTitle: "Multi Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    popupImageUrlMobile: "./assets/SnapshootPortfolioMobi.png",
    popupImageUrlDesktop: "./assets/Snapshoot-portfolio-desktop.png",
    technologiesPopup: ["html", "css", "Ruby on rails", "Github"],
    languages: ["html", "css", "javaScript", "bootstrap"],
    linkLive: "https://butlermuwo.github.io/Portfolio/",
    linkSource: "https://butlermuwo.github.io/Portfolio/",
    position: "one",
  },
  {
    postTitle: "Multi Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    popupImageUrlMobile: "./assets/SnapshootPortfolioMobi.png",
    popupImageUrlDesktop: "./assets/Snapshoot-portfolio-desktop.png",
    technologiesPopup: ["html", "css", "Ruby on rails", "Github"],
    languages: ["html", "css", "javaScript", "bootstrap"],
    linkLive: "https://butlermuwo.github.io/Portfolio/",
    linkSource: "https://butlermuwo.github.io/Portfolio/",
    position: "one",
  },
];

// popup data

let template = document.createElement("template");

template.innerHTML = `
  <div class="popup-bg">
          <div class="popup-data">
        
        <div class="active activeCard">
          <div class="head">

            <div>
          <h2>${cardsObjects[0].postTitle}</h2>  <i class="fas fa-times toggle-active close"></i>
              
            </div>
            <div class="project-img">
            <img src="${cardsObjects[0].popupImageUrlMobile}">
            </div>
          </div>
  
          <div class="intro">
            <p>
              ${cardsObjects[0].description}
            </p>
            <ul class="languages">
              <li>${cardsObjects[0].technologiesPopup[0]}</li>
              <li>${cardsObjects[0].technologiesPopup[1]}</li>
              <li>${cardsObjects[0].technologiesPopup[2]}</li>
              <li>${cardsObjects[0].technologiesPopup[3]}</li>
            </ul>
            <div class="btn-container">
              <button class=" cardBtn liveBtn">
                <span>See Live</span>
                <img src="./assets/Iconic/Icons/Icon.svg" alt="" srcset="" />
              </button>
              <button class=" cardBtn liveSourceBtn">
                <span>See Source</span>
                <i class="fab fa-github" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
  
  `;
document.body.appendChild(template.content);

const ul = document.getElementById("cards");

cardsObjects.forEach((card, i) => {
  let template = document.createElement("template");
  let tec = " ";
  const submitBtn = document.getElementById("submitBtn");
const errorMessage = document.getElementById("errorMessage");
function validator(e) {
  const formValue = document.getElementById("email").value;
  if ((formValue == formValue.toLowerCase()) == false) {
    e.preventDefault();
    errorMessage.innerHTML = `<i class="fas fa-exclamation-triangle"></i><strong>Invalid email !!</strong> Please insert an email without uppercase letters and try again`;
  }
}

  card.languages.forEach((li) => {
    tec.innerHTML = `<li>${li}</li>`;
  });
  console.log('this',tec)
  template.innerHTML = `
  <li class="card-container ${i % 2 == 0 ? "two" : "one"}">
          <div class="project-item">
            <div class="project-img"></div>
            <div class="project-description">
              <div class="description">
                <h2>${card.postTitle}</h2>
                <div class="width">
                  <p>
                ${card.description}
                  </p>
                </div>
              </div>
              <div>
                <ul class="languages">
                 ${tec}
                </ul>
              </div>
`
submitBtn.addEventListener("click", validator);

//local storage

// email validation
const formEmail = document.querySelector("form");
 const userEmailerror = document.querySelector('.errorEmail');
const userEmail = document.querySelector('.useremail');

formEmail.addEventListener('submit', (e) => {
  const userInput = userEmail.value;
  if (/[A-Z]/.test(userInput)) {
    userEmailerror.innerHTML = 'ERROR! Please use lowercase for email address';
    userEmailerror.classList.add('.errorEmail');
    e.preventDefault();
  }
 });

formEmail.addEventListener("input", () => {
  const formStorageData = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };
  localStorage.setItem("form", JSON.stringify(formStorageData));
});

const formObject = JSON.parse(localStorage.getItem("form"));
document.querySelector("#name").value = formObject.name;
document.querySelector("#email").value = formObject.email;
document.querySelector("#message").value = formObject.message;

