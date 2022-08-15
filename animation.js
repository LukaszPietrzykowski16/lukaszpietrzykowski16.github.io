import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Power2 } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

let appendPhotos = gsap.utils.toArray('.my-work-card');

const myWorkDiv = document.querySelectorAll('.my-work-card');

appendPhotos.forEach((card) => {
    const image =  card.querySelector('.my-work-card'),
    tl = gsap.timeline({paused: true});
    tl.set(card, {autoAlpha: 0.6});
    tl.from(card, 1.6, {
        yPercent: 100,
        ease: 'power2',
        opacity: 0
    });
    card.animation = tl;
})

ScrollTrigger.batch(appendPhotos, {
    onEnter: elements => elements.forEach((e, i) => 
    e.animation.delay(i * 0.2).restart(true)),
    once: true
})

