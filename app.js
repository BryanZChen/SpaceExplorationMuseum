// let btn = document.getElementById("close");
// let awsBanner = document.getElementById("AWS");

// // let nav2 = document.getElementsByClassName("nav-item");
// btn.addEventListener("click", (e)=>{
// awsBanner.style.display = "none";
// e.stopPropagation();
// });
// awsBanner.addEventListener("click", ()=>location.href = "https://www.amazon.com/");
// hometab.addEventListener("click", ()=>{


const video = document.querySelector('video');
let isPaused = false;
video.play();
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio !== 1 && !video.paused) {
      video.pause();
      isPaused = true;
    } else if (isPaused) {
      video.play();
      isPaused = false
    }
  });
}, {
  threshold: 0.5
});
observer.observe(video);

  (function ($) {
    $(function () {
  
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
  
  
    });
  })(jQuery);
  function scrolltop() {
    var element =  document.getElementById("navtop");
    element.scrollIntoView({behavior: "smooth"});
  }
  // $(function () {

  //   window.sr = ScrollReveal();

  //   if ($(window).width() < 768) {

  //     if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  //       $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  //     }

  //     sr.reveal('.js--fadeInRight', {
  //       origin: 'right',
  //       distance: '300px',
  //       easing: 'ease-in-out',
  //       duration: 800,
  //     });

  //   } else {

  //     sr.reveal('.js--fadeInLeft', {
  //       origin: 'left',
  //       distance: '300px',
  //       easing: 'ease-in-out',
  //       duration: 800,
  //     });

  //     sr.reveal('.js--fadeInRight', {
  //       origin: 'right',
  //       distance: '300px',
  //       easing: 'ease-in-out',
  //       duration: 800,
  //     });

  //   }

  //   sr.reveal('.js--fadeInLeft', {
  //     origin: 'left',
  //     distance: '300px',
  //     easing: 'ease-in-out',
  //     duration: 800,
  //   });

  //   sr.reveal('.js--fadeInRight', {
  //     origin: 'right',
  //     distance: '300px',
  //     easing: 'ease-in-out',
  //     duration: 800,
  //   });
  // });