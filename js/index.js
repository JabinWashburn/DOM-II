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