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
        <i class="fas fa-times toggle-active close"></i>
        <div class="active activeCard">
          <div class="head">
            <div>
           
              
            </div>
<<<<<<< HEAD
            <div class="project-img">
            <img src="${cardsObjects[0].popupImageUrlMobile}">
            </div>
=======
   
  
>>>>>>> parent of 59df428 (Update styles for popUp)
          </div>
  
          <div class="intro">
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a standard
              dummy text.
            </p>
            <ul class="languages">
              <li>css</li>
              <li>bootstrap</li>
              <li>html</li>
              <li>ruby</li>
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
// const popup = document.querySelector(".popup-bg");
const ul = document.getElementById("cards");

cardsObjects.forEach((card) => {
  let template = document.createElement("template");
<<<<<<< HEAD
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

=======
  let tec = "";
>>>>>>> parent of 59df428 (Update styles for popUp)
  card.languages.forEach((li) => {
    tec.innerHTML = `<li>${li}</li>`;
  });
  console.log('this',tec)
  template.innerHTML = `
  <li class="card-container one">
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

<<<<<<< HEAD
console.log(formObject);
=======
seeProjectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.classList.add("d-flex");
  });
});

const closeBtn = document.querySelector(".close");
const popup = document.querySelector(".popup-bg");
closeBtn.addEventListener("click", () => {
  popup.classList.remove("d-flex");
});

// seeProjectBtns.forEach(btn => {
// btn.addEventListener('click', () => {

// popup.classList.add('d-flex')
// })
// })

// const cardSection = document.querySelector("#cards");

// function makeListItems(arr) {
//   return arr.map((itm) => `<li>${itm}</li>`);
// }

// function createContent({ postTitle, description, languages }, num = "one") {
//   const cardContent = `<div class="card-container ${num}">
//                   <div class="project-item">
//     <div class="project-img"></div>
//     <div class="project-description">
//       <div class="description">
//         <h2>${postTitle}</h2>
//         <p>
//          ${description}
//         </p>
//       </div>
//       <ul class="languages">
//         ${makeListItems(languages)[0]}
//         ${makeListItems(languages)[1]}
//         ${makeListItems(languages)[2]}
//         ${makeListItems(languages)[3]}
//       </ul>
//       <button class="cardsBtn" type="button">See Project</button>
//     </div>
//   </div>
// </div>

// `;
//   cardSection.insertAdjacentHTML("beforeend", cardContent);
// }

// // window.onload(createContent(cardsObjects))

// // const dynamicCard = createContent(cardsObjects);

// //toggle active cardsOn
// const activeCard = document.querySelector(".activeCard");

// const header = document.querySelector("header");
// //default cardsBtn

// const cardsBtn = document.createElement("button");
// cardsBtn.className = "seeProject";

// //close popup

// //open popup
// cardsBtn.addEventListener("click", () => {
//   activeCard.classList.add("active");
//   header.classList.add("active-card");
//   closeBtn.classList.add("toggle-active");
//   createContentPopUp(cardsObjects);
// });

// //toggle active cardsOff

// function createContentPopUp(
//   {
//     postTitle,
//     description,
//     popupImageUrlMobile,
//     popupImageUrlDesktop,
//     technologiesPopup,
//     linkLive,
//     linkSource,
//     position,
//   },
//   isDesktop
// ) {
//   let dynamicList = makeListItems(technologiesPopup);
//   isDesktop = window.matchMedia("(min-width: 992px)").matches;

//   const cardContent = `

//   <h2>${postTitle}</h2>
//   <div class="project-img"><img src= '${popupImageUrlDesktop}'></div>

//   <p>
//   ${description}
//   </p>

//   <ul class="languages">
//   ${dynamicList[0]}
//   ${dynamicList[1]}
//   ${dynamicList[2]}
//   ${dynamicList[3]}
//   </ul>
//    <div class="btn-container">
//   <button class="liveBtn">
// <a href="#">See Live</a>
// <img src="./assets/Iconic/Icons/Icon.svg" alt="" srcset="" />
// </button>
// <button class="liveSourceBtn">
// <a href="#">See Source</a>
// <i class="fab fa-github" aria-hidden="true"></i>
// </button>
// </div>
// `;
//   activeCard.innerHTML = cardContent;
// }

// const positions = ["one", "two", "three"];

// function generateMoreCards(arr) {
//   let dummyArr = arr.forEach((num) => {
//     createContent(cardsObjects, num);
//   });
// }
// generateMoreCards(positions);
>>>>>>> parent of 59df428 (Update styles for popUp)
