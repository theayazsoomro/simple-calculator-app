"use strict";

let inputArea = document.querySelector(".inputArea");
function insert(num) {
  inputArea.value = inputArea.value + num;
}
function equal() {
  if (inputArea) {
    inputArea.value = eval(inputArea.value);
  }
}
function back() {
  let exp = document.querySelector(".inputArea").value;
  inputArea.value = exp.substring(0, exp.length - 1);
}
function clean() {
  inputArea.value = "";
}
