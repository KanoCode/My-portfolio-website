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

const cardsObjectsArr = [
  {
    postTitle: "Multi Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    reverse: "",
    popupImageUrlMobile: "./assets/SnapshootPortfolioMobi.png",
    popupImageUrlDesktop: "./assets/Snapshoot-portfolio-desktop.png",
    technologiesPopup: ["html", "css", "Ruby on rails", "Github"],
    languages: ["html", "css", "javaScript", "bootstrap"],
    linkLive: "https://butlermuwo.github.io/Portfolio/",
    linkSource: "https://butlermuwo.github.io/Portfolio/",
    position: "one",
  },
];


const descriptionContainer = document.querySelector(".description-container");

function makeListItems(arr) {
  return arr.map((itm) => `<li>${itm}</li>`);
}

function createContent({
  postTitle,
  description,
  reverse,
  popupImageUrlMobile,
  popupImageUrlDesktop,
  technologiesPopup,
  languages,
  linkLive,
  linkSource,
  position,
}) {
  let dynamicList = [];
  if (Array.isArray(languages)) {
    dynamicList = makeListItems(languages);
  }

  const cardContent = `
  <div class="project-img"></div>
  <div>
  <h2>${postTitle}</h2>
  <p>
  ${description}
  </p>
  <div class="details" style="background-color: red;">
  <ul class="languages">
  ${dynamicList[0]}
  ${dynamicList[1]}
  ${dynamicList[2]}
  ${dynamicList[3]}
  </ul>
  <button class="seeProject" onclick='focusProject()' type="button">See Project</button></div>`;

  descriptionContainer.innerHTML = cardContent;
  return descriptionContainer.innerHTML;
}

const dynamicCard = createContent(cardsObjectsArr[0]);

//toggle active cardsOn
const projectItem = document.querySelector(".project-item");

const header = document.querySelector("header");
//default cardsBtn

const cardsBtn = document.querySelector(".seeProject");

const closeBtn = document.querySelector(".toggle-active");
closeBtn.addEventListener("click", () => {
  projectItem.classList.remove("active");
  header.classList.remove("active-card");
  closeBtn.style.display = 'none';
});

//toggle active cardsOff

function focusProject() {
  projectItem.classList.add("active");
  createContentPopUp(cardsObjectsArr[0]);
  cardsBtn.style.display = "none";
  closeBtn.style.display = 'block';
  header.classList.add("active-card");
}

function createContentPopUp({
  postTitle,
  description,
  reverse,
  popupImageUrlMobile,
  popupImageUrlDesktop,
  technologiesPopup,
  languages,
  linkLive,
  linkSource,
  position,
}) {
  let dynamicList = [];
  if (Array.isArray(technologiesPopup)) {
    dynamicList = makeListItems(technologiesPopup);
  }

  const cardContent = `
  <div class="project-img"><img src= '${popupImageUrlMobile}'></div>
  <h2>${postTitle}</h2>
  <p>
  ${description}
  </p>

  <ul class="languages">
  ${dynamicList[0]}
  ${dynamicList[1]}
  ${dynamicList[2]}
  ${dynamicList[3]}
  </ul>
   <div class="btn-container">
  <button class="liveBtn">
<span>See Live</span>
<img src="./assets/Iconic/Icons/Icon.svg" alt="" srcset="" />
</button>
<button class="liveSourceBtn">
<span>See Source</span>
<i class="fab fa-github" aria-hidden="true"></i>
</button>
</div>
`;
  descriptionContainer.innerHTML = cardContent;
  return descriptionContainer.innerHTML;
}

