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

const names = document.getElementById('name').value;
const email = document.getElementById('mail').value;
const mess = document.getElementById('message').value;
const btn = document.getElementById('submitBtn').value;

const User = {
  'name' : names,
  'mail' : email,
  'message' : mess
}

btn.addEventListener('click', processData);
function processData (){
}

