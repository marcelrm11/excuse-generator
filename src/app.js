/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let parts = {
    who: ["The dog", "My grandma", "His turtle", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my homework", "the keys", "the car"],
    when: [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
    ]
  }
  document.getElementById("excuse").innerHTML = parts.map(part => randomPick(part)).join(' ');
};

function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}
