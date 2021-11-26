function drag(e) {
  console.log('drag starts...');
}

function allowDrop(ev){
  ev.preventDefault();
}

function drop(ev){
  ev.preventDefault();
  const draggedDiv = document.querySelector(".draggable_div")
  ev.target.appendChild(draggedDiv);
  //ev.target.style.backgroundColor = "red";

  let score = document.querySelector(".progress");
  score.textContent = "Progress: 1/1"
  alert("Good Job!");
  window.location.replace("puzzlecompletion2.html");
}   