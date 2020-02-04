import { Action } from '@ngrx/store';
import { Board } from './models/board';

export enum BingoGameActionTypes {
  AddBoard = '[BingoGame] Add Board',
}

export class AddBoard implements Action {
  readonly type = BingoGameActionTypes.AddBoard;
  constructor(public payload: { board: Board }) { }
}

export type BingoGameActions =
AddBoard;
