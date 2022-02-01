let menuBtnIcon = document.querySelector("i");
let menuBtnClass = menuBtnIcon.classList[1];
let menuBtn = document.getElementsByClassName("menu-btn")[0];


menuBtnIcon.classList.add('inactive');
console.log(menuBtnIcon.classList);
function switchIcons() {
    // menuBtnIcon.classList.toggle('active')
    if (menuBtnClass == "fa-bars") {
    menuBtnIcon.classList.toggle("fa-times");
    menuBtnIcon.classList.replace('inactive','active');
    
    
  } //else if(menuBtnClass == "fa-times") {
//     menuBtnIcon.classList.replace("fa-times", "fa-bars");
//     menuBtnIcon.classList.replace('active','inActive');
//     // console.log(menuBtnIcon.classList)  
// }
// menuBtnIcon.classList.remove('active')

  console.log(menuBtnIcon.classList);
}

menuBtn.addEventListener("click", switchIcons);
