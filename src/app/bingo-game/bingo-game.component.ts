import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { Board } from './models/board';
import { AddBoard, DrawNumber, StartGame } from './bingo-game.actions';
import * as fromBingoGame from './bingo-game.reducer';
import { animate, style, transition, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-bingo-game',
  templateUrl: './bingo-game.component.html',
  styleUrls: ['./bingo-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('scale', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('200ms', style({ transform: 'scale(1)' })),
      ])
    ]),
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms', style({ opacity: 1 })),
      ])
    ]),
  ]
})
export class BingoGameComponent implements OnInit {
  gameIsRunning$ = this.store.pipe(select(fromBingoGame.selectGameIsRunning));
  boards$ = this.store.pipe(select(fromBingoGame.selectBoards));
  drawnNumbers$ = this.store.pipe(select(fromBingoGame.selectDrawnNumbers));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onAddBoardClick() {
    const board = new Board();
    this.store.dispatch(new AddBoard({ board }));
  }

  onStartGameClick() {
    this.store.dispatch(new StartGame());
  }
}
