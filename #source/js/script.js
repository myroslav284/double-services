let sliderContainer = document.querySelector('.slider-container');
let sliderItem = document.querySelectorAll('.slider-item');
let buttonPre = document.querySelector('button.pre');
let buttonNext = document.querySelector('button.next');
let circleButtons = document.querySelectorAll('button.circle-btn');

let count = 0;
let smallCount = 0;
let difference = (1920 - document.body.offsetWidth);
let d;
let margin = parseInt(getComputedStyle(document.querySelector('.container')).marginLeft);

//cases btns
let casesNext = document.querySelector('.cases-next');
let casesPre = document.querySelector('.cases-pre');
let casesBtns = document.querySelectorAll('.cases-btn');
let casesContainer = document.querySelector('.cases__container');
let casesItems = document.querySelectorAll('.cases-item');
let casesCount = 0;

buttonNext.addEventListener('click', rollNext);
buttonPre.addEventListener('click', rollPre);
circleButtons.forEach(item => {
    item.addEventListener('click', rollCircle);
});
function rollNext() {
    count++;
    d = difference;
    if (count > 2) {
        count = 0;
        d = 0;
    }

    smallCount++;
    if (smallCount > 5) {
        smallCount = 0;
    }
    console.log(count);

    if (document.body.offsetWidth <= 1000) {
        circleButtons.forEach(item => {
            item.addEventListener('click', rollSliderSmall);
        });
        rollSliderSmall();
    }

    else if (document.body.offsetWidth <= 600) {
        console.log('successes');
        rollSliderSmall();
    } else {
        console.log('error');
        rollSlider();
    }
}
function rollPre() {
    count--;
    d = difference;
    if (count < 0) {
        count = 2;
    }

    console.log(count);

    smallCount--;
    if (smallCount < 0) {
        smallCount = 5;
    }

    if (document.body.offsetWidth <= 1000) {
        console.log('successes');
        circleButtons.forEach(item => {
            item.addEventListener('click', rollSliderSmall);
        });
        rollSliderSmall();
    } else {
        rollSlider();
    }


}

function rollCircle(event) {
    count = event.target.dataset.sliderBtn;
    smallCount = count;
    console.log(count);
    d = difference;
    if (document.body.offsetWidth <= 1000) {
        rollSliderSmall();
    } else rollSlider();
}


function rollSliderSmall() {
    sliderContainer.style.left = -(sliderItem[0].offsetWidth * smallCount + 20 * smallCount) + 'px';
    circleButtons.forEach(item => {
        item.classList.remove('active');
    });
    circleButtons[smallCount].classList.add('active');
}


function rollSlider() {
    if (count == 0) {
        d = 0;
    }
    sliderContainer.style.left = -(margin * count + sliderItem[0].offsetWidth * count + d) + 20 * count
        + 'px';
    console.log(sliderContainer.style.left);
    console.log(sliderItem[0].offsetWidth);

    circleButtons.forEach(item => {
        item.classList.remove('active');
    });
    circleButtons[count].classList.add('active');
}


casesNext.addEventListener('click', casesRollNext);
casesPre.addEventListener('click', casesRollPre);

function casesRollNext() {
    casesCount++;
    if (casesCount > 8) {
        casesCount = 0;
    }

    casesRoll();
}
function casesRollPre() {
    casesCount--;
    if (casesCount < 0) {
        casesCount = 8;
    }

    casesRoll();
}

function casesRoll(){
    casesContainer.style.left = -(casesItems[0].offsetWidth * casesCount + 20 * casesCount) +'px';
    console.log(casesContainer.style.left);
    console.log(casesCount)
}  

casesBtns.forEach(item => {
    item.addEventListener('click', (event)=>{
        casesCount = event.target.dataset.caseBtn;
        casesRoll();
    });
});

//change btn
import { changeBurger } from "./modules/functions.js";
changeBurger();
circleButtons[smallCount].classList.add('active');

buttonNext.onclick = function () {
    buttonNext.classList.add('active');
    buttonPre.classList.remove('active');
}
buttonPre.onclick = function () {
    buttonPre.classList.add('active');
    buttonNext.classList.remove('active');
}

