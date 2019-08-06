// Your code goes here
//footer

const foot = document.querySelector('.footer');
foot.addEventListener('mousemove', function (e) {
console.log ('footer moused over');
document.querySelector('.footer').style.backgroundColor= 'yellow';
})

const foot2 = document.querySelector('.footer');
foot.addEventListener('mouseout', function (e) {
console.log ('footer moused out');
document.querySelector('.footer').style.backgroundColor= 'red';
})