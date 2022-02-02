let menuBtnIcon = document.querySelector("i");
let menuBtnClass = menuBtnIcon.classList[1];
let mobileNav = document.querySelector(".navMenu");
let menuBtn = document.querySelector('.menuBtn');


function switchIcons() {
    if (menuBtnClass == "fa-bars") {
    menuBtnIcon.classList.toggle("fa-times");
  } 
  }


  mobileNav.addEventListener("click", ()=>{
  switchIcons();
  if(mobileNav.classList.contains("active")){
mobileNav.classList.remove("active")
  }else{
    mobileNav.classList.add("active");
  } 
})
