import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
  finalBcgArr = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.duplicateArr();
  }

  duplicateArr() {
    for (let i = 0; i < this.neededBackGrounds.length; i++) {
      this.finalBcgArr.push(this.neededBackGrounds[i]);
      this.finalBcgArr.push(this.neededBackGrounds[i]);
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
}
