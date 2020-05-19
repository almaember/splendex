import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Card } from "src/app/models/card";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  selectedPair: number = parseInt(this.router.url.split("/")[2]);
  selectedDeckSize: number = this.selectedPair * 2;
  numberOfRows: number;
  counter: number = 0;
  rest: number;
  cardsArr = [];
  background = [
    "angular",
    "d3",
    "jenkins",
    "postcss",
    "react",
    "redux",
    "sass",
    "splendex",
    "ts",
    "webpack",
  ];
  neededBackGrounds: Array<string> = this.background.slice(
    0,
    this.selectedPair
  );
  finalBcgArr: Card[] = [];
  firstSelectedCard: Card;

  constructor(private router: Router) {}

  ngOnInit() {
    this.duplicateArr();
  }

  duplicateArr() {
    for (let i = 0; i < this.neededBackGrounds.length; i++) {
      let newCard = new Card();
      newCard.id = i;
      newCard.img = this.neededBackGrounds[i];
      newCard.checked = false;
      this.finalBcgArr.push(newCard);

      let newCard2 = new Card();
      newCard2.id = 50 + i;
      newCard2.img = this.neededBackGrounds[i];
      newCard2.checked = false;
      this.finalBcgArr.push(newCard2);
    }
    this.shuffle(this.finalBcgArr);
    console.log(this.finalBcgArr);
  }

  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  checkPicture(card: Card) {
    if (!this.firstSelectedCard) {
      card.checked = true;
      this.firstSelectedCard = card;
    } else if (
      this.firstSelectedCard.img === card.img &&
      this.firstSelectedCard.id !== card.id
    ) {
      this.finalBcgArr.forEach((element) => {
        if (element.id === card.id) {
          element.checked = true;
        }
      });
      this.firstSelectedCard = undefined;
      console.log("You have a pair!", this.finalBcgArr);
    } else {
      console.log(this.firstSelectedCard);
      console.log(card);
      console.log("Try again! ");
    }
  }
}
