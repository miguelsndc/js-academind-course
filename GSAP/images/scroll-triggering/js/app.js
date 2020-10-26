const tl = gsap.timeline({
  defaults: {
    ease: "power1.out"
  }
});

// INTRO ===============================================================

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 })
tl.to('.slider', { y: "-100%", duration: 1.5, })
tl.to('.intro', { y: "-100%", duration: 1 }, "-=1")
tl.fromTo('nav', { y: '20%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.5 })
tl.fromTo('#landing', { y: '20%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.8 }, "-=0.5")

// SCROLL ==============================================================