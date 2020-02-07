import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { Board } from './models/board';
import { AddBoard, StartGame, Bingo, SetBingoNumbers } from './bingo-game.actions';
import * as fromBingoGame from './bingo-game.reducer';
import { hasBingo } from './bingo-game.utils';

@Component({
  selector: 'app-bingo-game',
  templateUrl: './bingo-game.component.html',
  styleUrls: ['./bingo-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BingoGameComponent implements OnInit {
  gameIsRunning$ = this.store.pipe(select(fromBingoGame.selectGameIsRunning));
  boards$ = this.store.pipe(select(fromBingoGame.selectBoards));
  drawnNumbers$ = this.store.pipe(select(fromBingoGame.selectDrawnNumbers));
  bingoNumbers$ = this.store.pipe(select(fromBingoGame.selectBingoNumbers));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onAddBoardClick() {
    this.store.dispatch(new AddBoard({ board: new Board() }));
  }

  onStartGameClick() {
    this.store.dispatch(new StartGame());
  }

  onBingo({ board, bingoNumbers }) {
    this.store.dispatch(new SetBingoNumbers({ bingoNumbers }));
    setTimeout(() => {
      this.store.dispatch(new Bingo({ board }));
    });
  }
}
