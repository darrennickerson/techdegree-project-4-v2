/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const overlay = document.getElementById("overlay");
const start = document.getElementById("btn__reset");
const qwerty = document.getElementById("qwerty");
const page = document.querySelector("html");
let game;
start.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

qwerty.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    game.handleInteraction(e.target.textContent);
  }
});

page.addEventListener("keyup", (e) => {
  game.handleInteraction(e.key);
});
