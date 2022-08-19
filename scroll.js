const target = document.querySelector('.name');
const threeD = document.querySelector('.three-d');
const myWork = document.querySelector('.test-my-work');

const technology = document.querySelector('.technology-animation');
window.addEventListener('scroll', () => {
    let pos = window.scrollY;
    myWork.style.transform = `translateX(${pos - 800}px)`;
    technology.style.transform = `translateX(${-pos - 800}px)`;
})