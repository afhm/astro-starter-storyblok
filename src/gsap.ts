import { gsap } from 'gsap-trial';

function init() {
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
