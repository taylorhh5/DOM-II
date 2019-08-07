// Your code goes here

//footer
 //mouse over footer turns footer blue
const foot = document.querySelector('.footer');
foot.addEventListener('mousemove', function (e) {
console.log ('footer moused over');
document.querySelector('.footer').style.backgroundColor= 'yellow';
})

//mouse out of footer turns footer red
const foot2 = document.querySelector('.footer');
foot.addEventListener('mouseout', function (e) {
console.log ('footer moused out');
document.querySelector('.footer').style.backgroundColor= 'red';
})   

// changes intro h2 to aqua on when clicked
const head = document.querySelector('.intro h2');
head.addEventListener('click', function (e) {
    console.log ('clicked');
    e.target.style.backgroundColor= 'aqua';
    }) 


    // turns buttons colors when clicked
    const btn = document.querySelectorAll('.content-pick .btn');
    btn[0].addEventListener('click', function (e) {
        console.log ('clicked');
        e.target.style.backgroundColor= 'orange';
        }) 
        btn[1].addEventListener('click', function (e) {
            console.log ('clicked');
            e.target.style.backgroundColor= 'blue';
            }) 
            btn[2].addEventListener('click', function (e) {
                console.log ('clicked');
                e.target.style.backgroundColor= 'green';
                }) 

// changes color of intro header when any key pressed

const mainHead = document.querySelector('.main-navigation .logo-heading');
window.addEventListener('keydown', function (e) {
console.log (e);
document.querySelector('.main-navigation  .logo-heading').style.backgroundColor= 'red';
})  
                
/// changes color of main header whe scrolled on
const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('wheel', function (e) {
console.log ('wheel');
document.querySelector('.main-navigation').style.backgroundColor='grey';
})



//double click buttons change colors
const btn2 = document.querySelectorAll('.content-pick .btn');
    btn2[0].addEventListener('dblclick', function (e) {
        console.log ('doubleclicked');
        e.target.style.backgroundColor= 'grey';
        }) 
        btn2[1].addEventListener('dblclick', function (e) {
            console.log ('doubleclicked');
            e.target.style.backgroundColor= 'purple';
            }) 
            btn2[2].addEventListener('dblclick', function (e) {
                console.log ('doubleclicked');
                e.target.style.backgroundColor= 'pink';
                }) 


// right click text display none
const dest = document.querySelector('.content-destination h2');
dest.addEventListener('contextmenu', function (e) {
console.log ('right');
document.querySelector('.content-destination h2').style.display='none';})


// display none on copy
const dest4 = document.querySelector('.content-pick h4');
dest4.addEventListener('copy', function (e) {
console.log ('select');
document.querySelector('.content-pick h4').style.display='none';})



// keypress

const footp = document.querySelector('.footer');
window.addEventListener('keypress', function (e) {

document.querySelector('.footer').style.backgroundColor='pink';})

//nav

const nav = document.querySelectorAll('.nav a');

nav.forEach(element => {
    element.addEventListener('click', function (e){
       e.preventDefault(); 
  })});

  //

  const destination = document.querySelector('.content-destination');
  destination.addEventListener('mouseover', function (e) {
    e.target.style.fontSize= '1rem';
  }) 


  //without stopPropagation added, h2 inherits font size of .content-destination
  const destination2 = document.querySelector('.content-destination h2');
  destination2.addEventListener('mouseover', function (e) {
    e.target.style.fontSize= '9rem';
    event.stopPropagation();
  }) 