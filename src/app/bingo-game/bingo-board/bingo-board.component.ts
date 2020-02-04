import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../models/board';

@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.scss']
})
export class BingoBoardComponent implements OnInit {
  @Input() board: Board;

  constructor() { }

  ngOnInit() {
  }

}
