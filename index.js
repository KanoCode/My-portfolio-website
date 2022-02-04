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

// form validation 
const submitBtn = document.getElementById("submitBtn"); 

function validator(e) { 
  const formValue = document.getElementById("email").value; 
  if (formValue === formValue.toLowerCase()) { 
    console.log(formValue,e); 
  } else { 
    e.preventDefault(); 
  } } 
  
submitBtn.addEventListener("click", validator); 