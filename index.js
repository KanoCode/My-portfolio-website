const menuBtnIcon = document.querySelector('i');
const menuBtnClass = menuBtnIcon.classList[1];
const mobileNav = document.querySelector('.navMenu');

function switchIcons() {
    if (menuBtnClass == 'fa-bars') {
    menuBtnIcon.classList.toggle('fa-times');
  } 
  }

mobileNav.addEventListener('click', ()=>{
  switchIcons();
  if(mobileNav.classList.contains('active')){
    mobileNav.classList.remove('active');
  }else{
    mobileNav.classList.add('active');
  } 
})

/*Projects Section*/
const projectSection = document.createElement('section');
const aboutSection = document.querySelector("#about")

projectSection.id = "cards";

console.log(projectSection.textContent)


aboutSection.insertAdjacentHTML('afterend',`<h2>${projectSection.textContent}</h2>`);
// aboutSection.insertAdjacentHTML('afterend','<h3>I am an H3</h3>')


