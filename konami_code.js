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
    const key = e.key;
  }
  body = document.querySelector('body');
  body.addEventListener('keydown', function(konami) {
    alert("Congratulations - You've cracked the code!")
  })
}
