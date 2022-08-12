import { gsap } from "gsap";

const nameH1 = document.querySelector('.name h1')


window.addEventListener('DOMContentLoaded', () => {
    underlineAnimation()
})

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

async function underlineAnimation(){
	gsap.from(nameH1, {y:-100, duration:0.8, opacity:0})
    await delay(1000);
    nameH1.classList.toggle('under')
    
}

const text = 'Hello I am frontend developer, who love learning new technologies and dive deep into new topics. So... That is it! If you scroll down you will see my work';


var array = text.split("");
var timer;

async function frameLooper () {
	if (array.length > 0) {
		document.querySelector('.typed-text').innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	let loopTimer = setTimeout(frameLooper,30);  /* change 70 for speed */

}
frameLooper();