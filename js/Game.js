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
    this.activePhrase = null;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */

  startGame() {
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    overlay.className = "start";
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  /**
   * handles the interation with the user. button clicks and keystrokes
   */

  handleInteraction(e) {
    const letter = e;
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

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */

  removeLife() {
    const hearts = document.getElementsByClassName("tries");
    hearts[this.missed].firstElementChild.src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
  won
*/

  checkForWin() {
    const letters = document.querySelectorAll(".letter");
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

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */

  gameOver(result) {
    const title = document.getElementById("game-over-message");
    if (result === true) {
      overlay.classList.replace("start", "win");
      title.innerText = "Congrats! You won!";
      overlay.style.display = "block";
    } else {
      overlay.classList.replace("start", "lose");
      title.innerText = "You didn't win this time.";
      overlay.style.display = "block";
    }
    this.resetGame();
  }

  /**
   * Resets the game elements for a new game
   */
  resetGame() {
    const hearts = document.getElementsByClassName("tries");
    document.querySelectorAll(".key").forEach((character) => {
      character.classList.remove("wrong", "chosen");
      character.disabled = false;
    });
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].firstElementChild.src = "images/liveHeart.png";
    }
  }
}
