import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Column } from "src/app/models/column";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  selectedPair: number = parseInt(this.router.url.split("/")[2]);
  selectedDeckSize: number = this.selectedPair * 2;
  numberOfRows: number;
  numberOfColumns: number;
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
  bcgArrLength: number = this.neededBackGrounds.length;
  finalBcgArr: Array<string> = [];

  constructor(private router: Router) {}

  ngOnInit() {
    console.log("DeckSize:", this.selectedDeckSize);
    this.numberOfRows = Math.ceil(this.selectedDeckSize / 5);
    console.log("Rows", this.numberOfRows);
    this.numberOfColumns = this.selectedDeckSize;

    // Generate background array
    for (let j = 0; j < this.bcgArrLength * 2; j++) {
      let randomNum: number = Math.floor(Math.random() * this.bcgArrLength);
      this.finalBcgArr.push(this.neededBackGrounds[randomNum]);
    }
    console.log("fck this: ", this.finalBcgArr);

    for (let i = 0; i < this.numberOfRows; i++) {
      this.cardsArr.push(new Column());
      this.rest = this.numberOfColumns - this.counter;

      if (this.numberOfRows !== i + 1 || this.rest === 5) {
        this.cardsArr[i].a = "a";
        this.cardsArr[i].b = "b";
        this.cardsArr[i].c = "c";
        this.cardsArr[i].d = "d";
        this.cardsArr[i].e = "e";
        this.counter += 5;
      } else {
        switch (this.rest) {
          case 1:
            this.cardsArr[i].a = "a";
            break;
          case 2:
            this.cardsArr[i].a = "a";
            this.cardsArr[i].b = "b";
            break;
          case 3:
            this.cardsArr[i].a = "a";
            this.cardsArr[i].b = "b";
            this.cardsArr[i].c = "c";
            break;
          case 4:
            this.cardsArr[i].a = "a";
            this.cardsArr[i].b = "b";
            this.cardsArr[i].c = "c";
            this.cardsArr[i].d = "d";
            break;
          default:
            break;
        }

        console.log("Rest:", this.rest);
      }
    }
  }
}
