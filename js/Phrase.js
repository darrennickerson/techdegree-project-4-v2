/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
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

  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  showMatchedLetter(letter) {
    document.querySelectorAll(".letter").forEach((character) => {
      if (character.textContent === letter) {
        character.classList.replace("hide", "show");
      }
    });
  }
}
