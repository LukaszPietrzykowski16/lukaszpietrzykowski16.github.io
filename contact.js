import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger)

const contactInfo = document.querySelector('.contact-info')
const contactForm = document.querySelector('.contact-form')

gsap.from(contactInfo, {scrollTrigger: {
    trigger: '.footer',
    toggleActions: 'play none none none'},
    y: 200,
    duration: 1,
    opacity: 0
  })

gsap.from(contactForm, {scrollTrigger: {
    trigger: '.footer',
    toggleActions: 'play none none none'},
    x: -200,
    duration: 1,
    opacity: 0
  })