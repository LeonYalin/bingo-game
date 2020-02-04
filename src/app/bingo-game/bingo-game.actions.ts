import { Action } from '@ngrx/store';

export enum BingoGameActionTypes {
  LoadBingoGames = '[BingoGame] Load BingoGames',
}

export class LoadBingoGames implements Action {
  readonly type = BingoGameActionTypes.LoadBingoGames;
}

export type BingoGameActions =
  LoadBingoGames;
