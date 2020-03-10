function clickEventHandler(event) {
    console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(event.target)
  }
  document.querySelector('a').addEventListener('click', clickEventHandler)
  document.querySelector('nav').addEventListener('click', clickEventHandler)
  document.querySelector('header').addEventListener('click', clickEventHandler)
  document.body.addEventListener('click', clickEventHandler)
  document.addEventListener('click', clickEventHandler)
  window.addEventListener('click', clickEventHandler)