import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { Board } from './models/board';
import { AddBoard } from './bingo-game.actions';
import * as fromBingoGame from './bingo-game.reducer';

@Component({
  selector: 'app-bingo-game',
  templateUrl: './bingo-game.component.html',
  styleUrls: ['./bingo-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BingoGameComponent implements OnInit {
  boards$ = this.store.pipe(select(fromBingoGame.selectBoards));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onAddBoardClick() {
    const board = new Board();
    this.store.dispatch(new AddBoard({ board }));
  }
}
