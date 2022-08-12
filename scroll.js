const target = document.querySelector('.name');
const threeD = document.querySelector('.three-d');
const myWork = document.querySelector('.test-my-work');

const technology = document.querySelector('.technology-animation');
window.addEventListener('scroll', () => {
    /*
    let scrollingValue2 = window.scrollY * (-0.2);
    threeD.style.transform = `translate3d(0px, ${scrollingValue2}px, 0px)`;
    */

    let pos = window.scrollY;
    myWork.style.transform = `translateX(${pos - 800}px)`;
    technology.style.transform = `translateX(${-pos - 800}px)`;
 
    /*
    let scrollingValue = window.scrollY * (0.2);
    target.style.transform = `translate3d(0px, ${scrollingValue}px, 0px)`;
  */
})