import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Board } from '../models/board';

@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BingoBoardComponent implements OnInit {
  @Input() board: Board;

  constructor() { }

  ngOnInit() {
  }

  isNumberActive(number: number): boolean {
    return this.board.activeNumbers.includes(number);
  }
}
