const startBtn = document.querySelector('.startbtn');
const panels = document.querySelectorAll('.panel');
//const startPage = document.querySelector('.start');

function goToGal() {
    document.querySelector('.start').classList.toggle('ed');
    document.querySelector('.panels').classList.toggle('hide');
}


function toggleOpen() {
    this.classList.toggle('open')
}

function toggleActive(e) {
console.log(e.propertyName);
if (e.propertyName.includes('flex') || !(e.propertyName.includes('padding-bottom'))) {
    this.classList.toggle('open-active');
}
}

startBtn.addEventListener('click', goToGal);

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); 
// panels.forEach(panel => panel.addEventListener('mouseup', toggleActive)); 
// panels.forEach(panel => panel.addEventListener('mouseout', toggleActive)); 
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
// added sliding text to hover to stop glitch