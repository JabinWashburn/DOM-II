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


window.addEventListener('keydown', (e) =>{
  alert('Check the console n00b');
  console.log(e.key);
});
//keydown end :) this one is funny go do it. 


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


var dragged;

document.addEventListener('drag', function (e){

}, false); 

document.addEventListener('dragstart', function (e){
  // if(e.target.className == 'nav-link'){
    dragged = e.target;
    e.target.style.opacity = .5;
    // alert('Testing');
  // };
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