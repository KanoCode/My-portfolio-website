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

// const cardsObjects = [
//   {
//     postTitle: "Multi Post Stories",
//     description:
//       "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
//     popupImageUrlMobile: "./assets/SnapshootPortfolioMobi.png",
//     popupImageUrlDesktop: "./assets/Snapshoot-portfolio-desktop.png",
//     technologiesPopup: ["html", "css", "Ruby on rails", "Github"],
//     languages: ["html", "css", "javaScript", "bootstrap"],
//     linkLive: "https://butlermuwo.github.io/Portfolio/",
//     linkSource: "https://butlermuwo.github.io/Portfolio/",
//     position: "one",
//   },
//   {
//     postTitle: "Multi Post Stories",
//     description:
//       "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
//     popupImageUrlMobile: "./assets/SnapshootPortfolioMobi.png",
//     popupImageUrlDesktop: "./assets/Snapshoot-portfolio-desktop.png",
//     technologiesPopup: ["html", "css", "Ruby on rails", "Github"],
//     languages: ["html", "css", "javaScript", "bootstrap"],
//     linkLive: "https://butlermuwo.github.io/Portfolio/",
//     linkSource: "https://butlermuwo.github.io/Portfolio/",
//     position: "one",
//   },
//   {
//     postTitle: "Multi Post Stories",
//     description:
//       "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
//     popupImageUrlMobile: "./assets/SnapshootPortfolioMobi.png",
//     popupImageUrlDesktop: "./assets/Snapshoot-portfolio-desktop.png",
//     technologiesPopup: ["html", "css", "Ruby on rails", "Github"],
//     languages: ["html", "css", "javaScript", "bootstrap"],
//     linkLive: "https://butlermuwo.github.io/Portfolio/",
//     linkSource: "https://butlermuwo.github.io/Portfolio/",
//     position: "one",
//   },
//   {
//     postTitle: "Multi Post Stories",
//     description:
//       "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
//     popupImageUrlMobile: "./assets/SnapshootPortfolioMobi.png",
//     popupImageUrlDesktop: "./assets/Snapshoot-portfolio-desktop.png",
//     technologiesPopup: ["html", "css", "Ruby on rails", "Github"],
//     languages: ["html", "css", "javaScript", "bootstrap"],
//     linkLive: "https://butlermuwo.github.io/Portfolio/",
//     linkSource: "https://butlermuwo.github.io/Portfolio/",
//     position: "one",
//   },
// ];

// popup data

// let template = document.createElement("template");

// template.innerHTML = `
//   <div class="popup-bg">
//           <div class="popup-data">
        
//         <div class="active activeCard">
//           <div class="head">

//             <div>
//           <h2>${cardsObjects[0].postTitle}</h2>  <i class="fas fa-times toggle-active close"></i>
              
//             </div>
//             <img src="${cardsObjects[0].popupImageUrlMobile}">
  
//           </div>
  
//           <div class="intro">
//             <p>
//               ${cardsObjects[0].description}
//             </p>
//             <ul class="languages">
//               <li>${cardsObjects[0].technologiesPopup[0]}</li>
//               <li>${cardsObjects[0].technologiesPopup[1]}</li>
//               <li>${cardsObjects[0].technologiesPopup[2]}</li>
//               <li>${cardsObjects[0].technologiesPopup[3]}</li>
//             </ul>
//             <div class="btn-container">
//               <button class=" cardBtn liveBtn">
//                 <span>See Live</span>
//                 <img src="./assets/Iconic/Icons/Icon.svg" alt="" srcset="" />
//               </button>
//               <button class=" cardBtn liveSourceBtn">
//                 <span>See Source</span>
//                 <i class="fab fa-github" aria-hidden="true"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
  
//   `;
// document.body.appendChild(template.content);

// const ul = document.getElementById("cards");

// cardsObjects.forEach((card, i) => {
//   let template = document.createElement("template");
//   let tec = " ";

//   card.languages.forEach((li) => {
//     tec.innerHTML = `<li>${li}</li>`;
//   });
//   template.innerHTML = `
//   <li class="card-container ${i % 2 == 0 ? "two" : "one"}">
//           <div class="project-item">
//             <div class="project-img"></div>
//             <div class="project-description">
//               <div class="description">
//                 <h2>${card.postTitle}</h2>
//                 <div class="width">
//                   <p>
//                 ${card.description}
//                   </p>
//                 </div>
//               </div>
//               <div>
//                 <ul class="languages">
//                  ${tec}
//                 </ul>
//               </div>
//               <div class="btnan">
//               <button class="seeProject cardBtns" type="button">See Project</button></div>
//             </div>
//           </div>
//         </li>
  
//   `;
//   ul.appendChild(template.content);
// });

// const seeProjectBtns = document.querySelectorAll(".cardBtns");

// seeProjectBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     popup.classList.add("d-flex");
//   });
// });

// const closeBtn = document.querySelector(".close");
// const popup = document.querySelector(".popup-bg");
// closeBtn.addEventListener("click", () => {
//   popup.classList.remove("d-flex");
// });

const box = document.getElementById('box');

const popUpBtn = document.getElementById('modal');

const cards = [
  {
    id: 1,
    heading: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it 1960s `,
    languages: ['css', 'HTML', 'Bootstrap', 'Ruby'],
    languages2: ['css', 'HTML', 'Ruby on Rails', 'Github'],

    image: './assets/SnapshootPortfolioMobi.png',
    seelive: 'See live',
    seesource: 'See source',
    button: 'See project',
  },
  {
    id: 2,
    heading: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it 1960s `,
    languages: ['css', 'HTML', 'Bootstrap', 'Ruby'],
    languages2: ['css', 'HTML', 'Ruby on Rails', 'Github'],

    button: 'See project',
    image: './assets/SnapshootPortfolioMobi.png',
    seelive: 'See live',
    seesource: 'See source',
  },
  {
    id: 3,
    heading: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        `,
    languages: ['css', 'HTML', 'Bootstrap', 'Ruby'],
    languages2: ['css', 'HTML', 'Ruby on Rails', 'Github'],

    image: './assets/SnapshootPortfolioMobi.png',

    button: 'See project',
    seelive: 'See live',
    seesource: 'See source',
  },
  {
    id: 4,
    heading: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.`,
    languages: ['css', 'HTML', 'Bootstrap', 'Ruby'],
    languages2: ['css', 'HTML', 'Ruby on Rails', 'Github'],
    image: './assets/SnapshootPortfolioMobi.png',
    button: 'See project',
    seelive: 'See live',
    seesource: 'See source',
  },
];

const projecCards = cards
  .map(
    (card) => `
    <div class="work${card.id}">
    <div class="cd11"></div>
    <div class="cont">
        <h3 class="cd12">${card.heading}</h3>
        <p class="cd13">
           ${card.description} 
        </p>
        <div class="cd14">
            <ul class="cdlinks">
    ${card.languages.map((lang) => `<li>${lang}</li>`).join('')}
             
            </ul>
        </div>
        <button data-modal-target="#modal" class="openmd" onclick="modal(${card.id})">See Project</button>
    </div>
</div>
`,
  ).join('');

box.innerHTML += projecCards;

function closeModal() {
  popUpBtn.classList.remove('active');
}
const popUp = (card) => {
  const temp = document.createElement('template');
  popUpBtn.innerHTML = '';
  temp.innerHTML = `
    <div class="modal-header">
        <h3 class="cd12">${card.heading}</h3>
      <button data-close-button class="close-button">&times;</button>
    </div>
    <img src="${card.image}" alt="popup-img">
    <p class="modal-body">
        ${card.description2}
    </p>
    <ul>
    ${card.languages2.map((lang) => `<li>${lang}</li>`).join('')}
    </ul>
    <div class="p-btn">
    <button>${card.seelive} <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
    <button>${card.seesource} <i class="fa-brands fa-github"></i></button>
    </div>
      `;

  popUpBtn.classList.add('active');
  popUpBtn.append(temp.content);
  const closebt = document.querySelector('.close-button');
  closebt.addEventListener('click', closeModal);
};

/* eslint-disable no-unused-vars */
const modal = (id) => {
  cards.find((item) => {
    if (Number(id) === Number(item.id)) {
      return popUp(item);
    }
    return undefined;
  });
};