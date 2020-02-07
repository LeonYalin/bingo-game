import { Action } from '@ngrx/store';
import { Board } from './models/board';

export enum BingoGameActionTypes {
  AddBoard = '[BingoGame] Add Board',
  StartGame = '[BingoGame] Start Game',
  EndGame = '[BingoGame] End Game',
  DrawNumber = '[BingoGame] Draw Number',
  Bingo = '[BingoGame] Bingo',
  SetBingoNumbers = '[BingoGame] Set Bingo Numbers',
  ResetData = '[BingoGame] Reset Data',
}

export class AddBoard implements Action {
  readonly type = BingoGameActionTypes.AddBoard;
  constructor(public payload: { board: Board }) { }
}

export class DrawNumber implements Action {
  readonly type = BingoGameActionTypes.DrawNumber;
  constructor(public payload: { num: number }) { }
}

export class StartGame implements Action {
  readonly type = BingoGameActionTypes.StartGame;
}

export class EndGame implements Action {
  readonly type = BingoGameActionTypes.EndGame;
}

export class Bingo implements Action {
  readonly type = BingoGameActionTypes.Bingo;
  constructor(public payload: { board: Board }) { }
}

export class SetBingoNumbers implements Action {
  readonly type = BingoGameActionTypes.SetBingoNumbers;
  constructor(public payload: { bingoNumbers: number[] }) { }
}

export class ResetData implements Action {
  readonly type = BingoGameActionTypes.ResetData;
}

export type BingoGameActions =
AddBoard |
StartGame |
EndGame |
Bingo |
SetBingoNumbers |
ResetData |
DrawNumber;
