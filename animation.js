import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const myWorkDiv = document.querySelectorAll(".card");

gsap.from(myWorkDiv, {
  scrollTrigger: {
    trigger: myWorkDiv,
    toggleActions: "play none none none",
  },
  y: 200,
  duration: 1,
  opacity: 0,
});
