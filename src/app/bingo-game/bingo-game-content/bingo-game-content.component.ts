import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo-game-content',
  templateUrl: './bingo-game-content.component.html',
  styleUrls: ['./bingo-game-content.component.scss']
})
export class BingoGameContentComponent implements OnInit {
  boards: [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}
