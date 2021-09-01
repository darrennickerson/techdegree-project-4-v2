/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("an arm and a leg"),
      new Phrase("beating around the bush"),
      new Phrase("a blessing in disguise"),
      new Phrase("under the weather"),
      new Phrase("to make matters worse"),
    ];
    this.activePhrase = this.getRandomPhrase();
  }

  startGame() {
    this.resetGame();
    overlay.style.display = "none";
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  handleInteraction(e) {
    let letter = e;
    let letterObj;
    const letters = document.querySelectorAll(".key");
    letters.forEach((character) => {
      if (character.textContent === e) {
        letterObj = character;
        letterObj.disabled = true;
        letterObj.blur();
      }
    });
    if (this.activePhrase.checkLetter(letter)) {
      this.activePhrase.showMatchedLetter(letter);
      letterObj.classList.add("chosen");
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      if (letterObj.classList.contains("wrong")) {
      } else {
        letterObj.classList.add("wrong");
        this.removeLife();
      }
    }
  }

  removeLife() {
    let hearts = document.getElementsByClassName("tries");
    hearts[this.missed].firstElementChild.src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  checkForWin() {
    let letters = document.querySelectorAll(".letter");
    let hide = 0;
    letters.forEach((letter) => {
      if (letter.classList.contains("hide")) {
        hide += 1;
      }
    });
    if (hide === 0) {
      return true;
    }
  }
  gameOver(result) {
    let title = document.getElementById("game-over-message");
    if (result === true) {
      overlay.classList.replace("start", "win");
      title.innerText = "Congrats! You won!";
      overlay.style.display = "block";
    } else {
      overlay.classList.replace("start", "lose");
      title.innerText = "You didn't win this time.";
      overlay.style.display = "block";
    }
  }
  resetGame() {
    let hearts = document.getElementsByClassName("tries");
    overlay.className = "start";
    document.querySelectorAll(".key").forEach((character) => {
      character.classList.remove("wrong", "chosen");
      character.disabled = false;
    });
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].firstElementChild.src = "images/liveHeart.png";
    }
  }
}
