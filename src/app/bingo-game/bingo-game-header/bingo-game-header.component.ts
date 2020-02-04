import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bingo-game-header',
  templateUrl: './bingo-game-header.component.html',
  styleUrls: ['./bingo-game-header.component.scss']
})
export class BingoGameHeaderComponent implements OnInit {
  @Output() addBoardClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
}
