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
  
  body = document.querySelector('body');
  body.addEventListener('keydown', function(konami) {
    alert("Congratulations - You've cracked the code!")
  })
}
