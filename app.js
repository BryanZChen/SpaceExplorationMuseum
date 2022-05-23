// let btn = document.getElementById("close");
// let awsBanner = document.getElementById("AWS");

// // let nav2 = document.getElementsByClassName("nav-item");
// btn.addEventListener("click", (e)=>{
// awsBanner.style.display = "none";
// e.stopPropagation();
// });
// awsBanner.addEventListener("click", ()=>location.href = "https://www.amazon.com/");
// hometab.addEventListener("click", ()=>{

function scrolltop() {
  document.getElementById("navtop").scrollIntoView();
}
$(function () {

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {

    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }

  sr.reveal('.js--fadeInLeft', {
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });

  sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });
});