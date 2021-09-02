/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  /**
   * Display phrase on game board
   */

  addPhraseToDisplay() {
    const phraseSection = document.getElementById("phrase");
    let html = "";
    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] !== " ") {
        html += ` <li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
      } else {
        html += `<li class="space"> </li>`;
      }
    }

    phraseSection.firstElementChild.innerHTML = html;
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */

  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */

  showMatchedLetter(letter) {
    document.querySelectorAll(".letter").forEach((character) => {
      if (character.textContent === letter) {
        character.classList.replace("hide", "show");
      }
    });
  }
}
