function revealMessage() {
    document.getElementById("button__message").style.display='flex';
  }
  document.addEventListener("DOMContentLoaded",function(){
  // mobile menu
  var burgerIcon = document.getElementById("burger");
  var navbarMenu = document.getElementById("nav-links");
  if (burgerIcon !== null && navbarMenu!==null) {
    burgerIcon.addEventListener('click', function(){
      navbarMenu.classList.toggle('is-active');});
  }});
  
  
  document.addEventListener("DOMContentLoaded",function(){
  // Modal
  const contactButton=document.querySelector('#contact');
  const modalbg=document.querySelector(' .modal-background');
  const modal=document.querySelector(' .modal');
  if (contactButton !== null && modalbg!==null && modal!==null) {
    contactButton.addEventListener('click', function(){
    modal.classList.add('is-active');
  });};
  
  if (contactButton !== null && modalbg!==null && modal!==null) {
    modalbg.addEventListener('click', function(){
      modal.classList.remove('is-active');
    });};
  });