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
  var index = 0;
  var body = document.body;
  body.addEventListener('keydown', function(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      index++;
    
    if (index === codes.length - 1) {
      alert("Congratulations - You've cracked the code!");
      
      index = 0;
    } 
    } else {
      index = 0;
    }
    });
}

init();