import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const nameH1 = document.querySelector(".name h1");

window.addEventListener("DOMContentLoaded", () => {
  underlineAnimation();
});

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function underlineAnimation() {
  gsap.from(nameH1, { y: -100, duration: 0.8, opacity: 0 });
  await delay(1000);
  nameH1.classList.toggle("under");
}

const text =
  "I am a developer with 3 years of experience specializing in Angular. Currently, I work for Envelo and am actively seeking new challenges that will allow me to grow my skills and work on ambitious projects.";

var array = text.split("");
var timer;

async function frameLooper() {
  if (array.length > 0) {
    document.querySelector(".typed-text").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
  }
  let loopTimer = setTimeout(frameLooper, 30);
}
frameLooper();

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
