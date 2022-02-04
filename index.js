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

// form validation
// const submitBtn = document.getElementById("submitBtn");
const form = document.querySelector("form");
form.addEventListener("submit", validator);

function validator(e) {
  const errorMessg = document.getAnimations("error");
  const formValue = document.getElementById("email").value;
  if (formValue === formValue.toLowerCase()) {
  } else {
    e.preventDefault();
    console.log("not the correct format", errorMessg);
    errorMessg.innerHTML +=
      '<i class="fas fa-exclamation-triangle"></i> *please insert email in the correct format and do not include uppercase letters *';
  }
}

submitBtn.addEventListener("click", validator);
