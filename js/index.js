// function clickEventHandler(event) {
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
//   }
//   document.querySelector('a').addEventListener('click', clickEventHandler)
//   document.querySelector('nav').addEventListener('click', clickEventHandler)
//   document.querySelector('header').addEventListener('click', clickEventHandler)
//   document.body.addEventListener('click', clickEventHandler)
//   document.addEventListener('click', clickEventHandler)
//   window.addEventListener('click', clickEventHandler)

// document.querySelector()


//here is where i made the home nav turn red when hovering, it resets every hover.

function hoverEventHandler(e){
  e.target.style.color = 'red';

  setTimeout(function (){
    e.target.style.color = '';
  }, 500);
}

document.querySelector('a').addEventListener('mouseover', hoverEventHandler);

// mouseover end 
//you will be alrted to check the console and you will see the button you pressed 


window.addEventListener('keydown', (e) =>{
  alert('Check the console n00b');
  console.log(e.key);
});
//keydown end :) this one is funny go do it. 
//using the scroll wheel on the bus image changes its size. 

function zoom(e){
  e.preventDefault();

  scale +=event.deltaY * -0.01;

  scale = Math.min(Math.max(.125, scale), 4);

  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('img');
el.onwheel = zoom;
// zoom end here 
//you can drag and drop the nav links around each other, the area to drop them turns purple. 

var dragged;

document.addEventListener('drag', function (e){

}, false); 

document.addEventListener('dragstart', function (e){
    dragged = e.target;
    e.target.style.opacity = .5;
}, false);

document.addEventListener('dragend', function(e){
  e.target.style.opacity = '';
}, false);

document.addEventListener('dragover', function(e){
  e.preventDefault();
}, false);

document.addEventListener('dragenter', function (e){
  if(e.target.className == 'nav'){
    e.target.style.background = 'purple';
  }
}, false);

document.addEventListener('dragleave', function(e){
  if (e.target.className == 'nav'){
    e.target.style.background = '';
  }
}, false); 

document.addEventListener('drop', function(e){
  e.preventDefault(); 
  if (e.target.className == 'nav'){
    e.target.style.background = '';
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
  }
}, false);
// this is the end of drag/drop 
//when you load the page and open the console you will see a cool load message to let you know everything was loaded properly. 

window.addEventListener('load', (e) => {
  console.log('Sup dude this page is fully loaded kinda like a suprem taco from taco bell.')
})

// this is the end of load 
//if you click in the input box it will turn pink 

const focusStuff = document.querySelector('input');

focusStuff.addEventListener('focus', (e) =>{
  e.target.style.background = 'pink';
}); 

//this is the end of Focus 
//if you resize the webpage it will alert you the new size of the web page
window.addEventListener('resize', reportWindowSize);

function reportWindowSize() {
   alert(`Height: ${window.innerHeight} ,Width: ${window.innerWidth}`);
}

//this is the end of resize 
//if you scoll on the page it will log in the console the location of your scroll
let last_known_scroll_position = 0;
let ticketing = false; 

function doSomething(scroll_pos){
  console.log('here is your scroll position',scroll_pos); 
}

window.addEventListener('scroll', function(e){
  last_known_scroll_position = window.scrollY;

  if(!ticketing) {
    window.requestAnimationFrame(function(){
      doSomething(last_known_scroll_position);
    });

    ticketing = true;
  }
});

//here is the end scroll 
//start of select., when you highlight it will log in the console what you highlighted in the input 
function logSelection(e){
  let selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
  console.log('You selected: ' + selection);
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);


 //here is the end of select 
 //start of double click, turns the background green 

 const doubleThing = document.querySelector('div');

 doubleThing.addEventListener('dblclick', function(e){
   e.target.style.background = 'green';
 });

//here is the end of double click 
//using preventDefault.

document.querySelector('a').addEventListener('click', function (e){
  e.preventDefault();
  alert('no refreshy');
});
//when you click a link it tells you 'no refreshy'