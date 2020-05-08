document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const width = 8;
  
  const candyColors = ["red", "yellow", "orange", "purple", "green", "blue"];

  //   Create Board
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("draggable", true);
      square.setAttribute("id", i);
      let randomColor = Math.floor(Math.random() * candyColors.length);
      square.style.backgroundColor = candyColors[randomColor];
      grid.appendChild(square);
    }
  }
  
  createBoard();

  //   Drag the candies
  const squares = document.querySelectorAll(".grid div");
  squares.forEach((square) => {
    square.addEventListener("dragstart", dragStart);
    square.addEventListener("dragend", dragEnd);
    square.addEventListener("dragover", dragOver);
    square.addEventListener("dragenter", dragEnter);
    square.addEventListener("dragleave", dragLeave);
    square.addEventListener("drop", dragDrop);
  });

  function dragStart() {
    console.log(this.id, "dragstart");
  }
  function dragEnd() {
    console.log(this.id, "dragend");
  }
  function dragOver() {
    console.log(this.id, "dragover");
  }
  function dragEnter() {
    console.log(this.id, "dragenter");
  }
  function dragLeave() {
    console.log(this.id, "dragleave");
  }
  function dragDrop() {
    console.log(this.id, "drop");
  }
});
