// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function createCircle() {
   var circle =document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",50)
  circle.setAttribute("cy",50)
  circle.setAttribute("r",30)
  circle.setAttribute("fill","black")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
function createDOg() {
  var circle =document.createElementNS(namespace,"Dog")
circle.setAttribute("r",30)
circle.setAttribute("fill","white")
var canvas = document.getElementById("game-board")
canvas.appendChild(Dog)
}
