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

//form validation

const submitBtn = document.getElementById("submitBtn");
const errorMessage = document.getElementById("errorMessage");
function validator(e) {
  const formValue = document.getElementById("email").value;
  if ((formValue == formValue.toLowerCase()) == false) {
    e.preventDefault();
    errorMessage.innerHTML = `<i class="fas fa-exclamation-triangle"></i><strong>Invalid email !!</strong> Insert a valid email and try again`;
  }
}

submitBtn.addEventListener("click", validator);
