
const timeLine = gsap.timeline();

timeLine
  .to(".anilogo", { duration: 1, opacity: 1 },)
  .to(".ani1", { duration: .7, opacity: 1 }, "-=0.5")
  .to(".ani2", { duration: .7, opacity: 1, }, "-=0.5")
  .to(".ani3", { duration: .7, opacity: 1, }, "-=0.5")
