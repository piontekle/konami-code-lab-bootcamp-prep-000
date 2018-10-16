const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let index = 0;
  
  function konamiCodeHandler(e) {
    const key = e.which;
    
    if (key === codes[index]) {
      index++;
    }
    if (key === codes.length) {
      alert("Congratulations - You've cracked the code!")
      
      index = 0;
    } else {
      index = 0;
    }
  }
  body = document.querySelector('body');
  body.addEventListener('keydown', konamiCodeHandler())
}
