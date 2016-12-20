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
function createCircle2() {
  var circle =document.createElementNS(namespace,"circle")
circle.setAttribute("cx",150)
circle.setAttribute("cy",50)
circle.setAttribute("r",30)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function createCircle3() {
  var circle =document.createElementNS(namespace,"circle")
circle.setAttribute("cx",250)
circle.setAttribute("cy",50)
circle.setAttribute("r",30)
circle.setAttribute("fill","black")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function createCircle4() {
  var circle =document.createElementNS(namespace,"circle")
circle.setAttribute("cx",50)
circle.setAttribute("cy",150)
circle.setAttribute("r",30)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function createCircle5() {
  var circle =document.createElementNS(namespace,"circle")
circle.setAttribute("cx",150)
circle.setAttribute("cy",150)
circle.setAttribute("r",30)
circle.setAttribute("fill","black")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function createCircle6() {
  var circle =document.createElementNS(namespace,"circle")
circle.setAttribute("cx",250)
circle.setAttribute("cy",150)
circle.setAttribute("r",30)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function createCircle7() {
  var circle =document.createElementNS(namespace,"circle")
circle.setAttribute("cx",50)
circle.setAttribute("cy","250")
circle.setAttribute("r",30)
circle.setAttribute("fill","black")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function createCircle8() {
  var circle =document.createElementNS(namespace,"circle")
circle.setAttribute("cx",150)
circle.setAttribute("cy","250")
circle.setAttribute("r",30)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function createCircle9() {
  var circle =document.createElementNS(namespace,"circle")
circle.setAttribute("cx",250)
circle.setAttribute("cy","250")
circle.setAttribute("r",30)
circle.setAttribute("fill","black")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
