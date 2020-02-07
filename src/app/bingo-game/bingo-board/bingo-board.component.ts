import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Board } from '../models/board';

@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BingoBoardComponent implements OnInit {
  @Input() board: Board;
  @Input() drawnNumbers: number[];
  @Input() bingoNumbers: number[];
  @Input() bingo = false;

  constructor() { }

  ngOnInit() {
  }

  isDrawnNumber(num: number): boolean {
    return this.drawnNumbers.includes(num);
  }

  isBingoNumber(num: number): boolean {
    return this.bingoNumbers.includes(num);
  }
}
