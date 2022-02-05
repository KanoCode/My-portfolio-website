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
    errorMessage.innerHTML = `<i class="fas fa-exclamation-triangle"></i><strong>Invalid email !!</strong> Please insert an email without uppercase letters and try again`;
  }
}

submitBtn.addEventListener("click", validator);

//local storage

// email validation
const formEmail = document.querySelector("form");
// const userEmailerror = document.querySelector('.errorEmail');
// const userEmail = document.querySelector('.useremail');

// formEmail.addEventListener('submit', (e) => {
//   const userInput = userEmail.value;
//   if (/[A-Z]/.test(userInput)) {
//     userEmailerror.innerHTML = 'ERROR! Please use lowercase for email address';
//     userEmailerror.classList.add('.errorEmail');
//     e.preventDefault();
//   }
// });

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

console.log(formObject);
