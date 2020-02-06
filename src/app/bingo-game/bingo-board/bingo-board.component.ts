import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
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
  @Input() bingo: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  isNumberMatched(num: number): boolean {
    return this.drawnNumbers.includes(num);
  }
}
