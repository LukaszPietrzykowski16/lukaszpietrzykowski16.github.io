import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Power2 } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)


const menu = document.querySelector('.second-carousel')
const items = document.querySelectorAll('.second-carousel-card')
const images = document.querySelectorAll('.second-carousel-card img')
let menuWidth = menu.clientWidth
let itemWidth = items[0].clientWidth
let wrapWidth = items.length * itemWidth

let scrollSpeed = 0
let oldScrollY = 0
let scrollY = 0
let y = 0


/*--------------------
Lerp
--------------------*/
const lerp = (v0, v1, t) => {
  return v0 * ( 1 - t ) + v1 * t
}


/*--------------------
Dispose
--------------------*/
const dispose = (scroll) => {
  gsap.set(items, {
    x: (i) => {
      return i * itemWidth + scroll
    },
    modifiers: {
      x: (x, target) => {
        const s = gsap.utils.wrap(-itemWidth, wrapWidth - itemWidth, parseInt(x))
        return `${s}px`
      }
    }
  })
} 
dispose(0)


/*--------------------
Touch
--------------------*/
let touchStart = 0
let touchX = 0
let isDragging = false
const handleTouchStart = (e) => {
  touchStart = e.clientX || e.touches[0].clientX
  isDragging = true
  menu.classList.add('is-dragging')
}
const handleTouchMove = (e) => {
  if (!isDragging) return
  touchX = e.clientX || e.touches[0].clientX
  scrollY += (touchX - touchStart) * 2.5
  touchStart = touchX
}
const handleTouchEnd = () => {
  isDragging = false
  menu.classList.remove('is-dragging')
}


/*--------------------
Listeners
--------------------*/

menu.addEventListener('touchstart', handleTouchStart)
menu.addEventListener('touchmove', handleTouchMove)
menu.addEventListener('touchend', handleTouchEnd)

menu.addEventListener('mousedown', handleTouchStart)
menu.addEventListener('mousemove', handleTouchMove)
menu.addEventListener('mouseleave', handleTouchEnd)
menu.addEventListener('mouseup', handleTouchEnd)

menu.addEventListener('selectstart', () => { return false })


/*--------------------
Resize
--------------------*/


// for parallax effect

window.addEventListener('resize', () => {
    menuWidth = menu.clientWidth
    itemWidth = items[0].clientWidth
    wrapWidth = items.length * itemWidth
    /*
    if (menu.clientWidth < 1050){
      for (let i=0; i<items.length; i++){
       items[i].style.width = '90vw';
       items[i].style.marginLeft = '50vw';
       }
     } 
     */
})




/*--------------------
Render
--------------------*/
const render = () => {
  window.requestAnimationFrame(render)
  y = lerp(y, scrollY, .1)
  dispose(y)
  
  scrollSpeed = y - oldScrollY
  oldScrollY = y
  
  gsap.to(items, {
    skewX: -scrollSpeed * .2,
    rotate: scrollSpeed * .01,
    scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003
  })
}
window.requestAnimationFrame(render);


let appendPhotos = gsap.utils.toArray('.second-carousel-card');
appendPhotos.forEach((card) => {
    const image =  card.querySelector('.second-carousel-card'),
    tl = gsap.timeline({paused: true});
    tl.set(card, {autoAlpha: 0.1});
    tl.from(card, 1.5, {
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


