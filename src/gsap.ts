import { gsap } from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
// import classie from 'classie';
// import { ScrollTrigger } from 'gsap-trial/all';

function init() {
  gsap.registerPlugin(ScrollTrigger);

  // ScrollTrigger.defaults({
  //   markers: true,
  // });

  // const bodyEl = document.querySelector('.p-nav')
  // classie.add(bodyEl, 'show-menu');

  // ScrollTrigger.create({
  //   start: 'top -80',
  //   end: 99999,
  //   toggleClass: { className: 'h-[50px]', targets: '.p-header' }
  // });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.p-header',
      start: 'top+=100px',
      end: 'bottom top',
      toggleActions: 'play none none reverse',
      scrub: 0.3,
      markers: true,
    },
  });

  tl.to('.p-header', {
    duration: 0.3,
    height: 40,
    ease: 'power4.inOut',
  });

  gsap.delayedCall(0, () => {
    gsap.from('.titill', {
      duration: 1.3,
      opacity: 0,
      y: 100,
      ease: 'power4.inOut',
      autoAlpha: 0,
      stagger: {
        amount: 0.3,
      },
    });
  });

  gsap.delayedCall(0, () => {
    gsap.from('.nlink', {
      duration: 1.3,
      opacity: 0,
      y: -50,
      ease: 'power4.inOut',
      autoAlpha: 0,
      stagger: {
        amount: 0.3,
      },
    });
  });
}

window.onload = init;
