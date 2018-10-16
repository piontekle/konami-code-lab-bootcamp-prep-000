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

let index = 0;

function init() {
  // your code here
  
  
  var body = document.body;
  body.addEventListener('keydown', function konamiCodeHandler(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      index++;
    
    if (key === codes.length-1) {
      alert("Congratulations - You've cracked the code!")
      
      index = 0;
    } 
    } else {
      index = 0;
    }
    })
}
