import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Board } from '../models/board';
import { hasBingo } from '../bingo-game.utils';

@Component({
  selector: 'app-bingo-boards-list',
  templateUrl: './bingo-boards-list.component.html',
  styleUrls: ['./bingo-boards-list.component.scss']
})
export class BingoBoardsListComponent implements OnInit {
  @Input() boards: Board[];
  @Input() drawnNumbers: number[];
  @Output() bingo = new EventEmitter<Board>();

  constructor() { }

  ngOnInit() {
  }

  isBingo(board: Board): boolean {
    const isBingo = hasBingo(board, this.drawnNumbers);
    if (isBingo) {
      // this.store.dispatch(new Bingo({ board }));
      this.bingo.emit(board);
    }
    return isBingo;
  }
}
