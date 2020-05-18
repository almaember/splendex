import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  deckSizePairs = [3, 4, 5, 6, 7, 8, 9, 10];
  selectedDeck: number;

  constructor() {}

  ngOnInit() {}
}
