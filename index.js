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

const cardsObjects = {
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
};

const cardSection = document.querySelector("#cards");

function makeListItems(arr) {
  return arr.map((itm) => `<li>${itm}</li>`);
}

function createContent({ postTitle, description, languages }, num = "one") {
  const cardContent = `<div class="card-container ${num}">
                  <div class="project-item">
    <div class="project-img"></div>
    <div class="project-description">
      <div class="description">
        <h2>${postTitle}</h2>
        <p>
         ${description}
        </p>
      </div>
      <ul class="languages">
        ${makeListItems(languages)[0]}
        ${makeListItems(languages)[1]}
        ${makeListItems(languages)[2]}
        ${makeListItems(languages)[3]}
      </ul>
      <button class="cardsBtn" type="button">See Project</button>
    </div>
  </div>
</div>

`;

  cardSection.insertAdjacentHTML('beforeend', cardContent);
  // console.log(typeof cardContent);
  return cardSection.innerHTML;
}

// const dynamicCard = createContent(cardsObjects);

//toggle active cardsOn
const projectItem = document.querySelector(".project-item");

const header = document.querySelector("header");
//default cardsBtn

const cardsBtn = document.querySelector(".seeProject");

//close popup
// const closeBtn = document.querySelector(".toggle-active");
// closeBtn.addEventListener("click", () => {
//   projectItem.classList.remove("active");
//   header.classList.remove("active-card");
//   closeBtn.style.display = "none";
//   createContent(cardsObjectsArr[0]);
// });

//toggle active cardsOff

function focusProject() {
  projectItem.classList.add("active");
  createContentPopUp(cardsObjectsArr[0]);
  cardsBtn.classList.remove("active");
  closeBtn.style.display = "block";
}

function createContentPopUp(
  {
    postTitle,
    description,
    popupImageUrlMobile,
    popupImageUrlDesktop,
    technologiesPopup,
    linkLive,
    linkSource,
    position,
  },
  isDesktop
) {
  let dynamicList = makeListItems(technologiesPopup);
  isDesktop = window.matchMedia("(min-width: 992px)").matches;

  const cardContent = `
  <div class="project-img"><img src= '${
    isDesktop ? popupImageUrlDesktop : popupImageUrlMobile
  }'></div>
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
  // descriptionContainer.innerHTML = cardContent;
  // return descriptionContainer.innerHTML;
}

const positions = ["one", "two", "three"];

function generateMoreCards(arr) {
  let dummyArr = arr.forEach((num) => {
    createContent(cardsObjects, num);
  });
}

// generateMoreCards(positions);
