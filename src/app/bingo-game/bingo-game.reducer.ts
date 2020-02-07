import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import { Board } from './models/board';
import { BingoGameActions, BingoGameActionTypes } from './bingo-game.actions';

export const bingoGameFeatureKey = 'bingoGame';

export interface State {
  boards: Board[];
  drawnNumbers: number[];
  bingoNumbers: number[];
  gameIsRunning: boolean;
}

export const initialState: State = {
  boards: [],
  drawnNumbers: [],
  bingoNumbers: [],
  gameIsRunning: false,
};

export function reducer(state = initialState, action: BingoGameActions): State {
  switch (action.type) {
    case BingoGameActionTypes.AddBoard:
      return {
        ...state, boards: [
          ...state.boards,
          action.payload.board,
        ]
      };
    case BingoGameActionTypes.StartGame:
      return {
        ...state,
        gameIsRunning: true,
      };
    case BingoGameActionTypes.EndGame:
      return {
        ...state,
        gameIsRunning: false,
      };
    case BingoGameActionTypes.SetBingoNumbers:
      return {
        ...state,
        bingoNumbers: [...state.bingoNumbers, ...action.payload.bingoNumbers],
      };
    case BingoGameActionTypes.DrawNumber:
      return {
        ...state,
        drawnNumbers: [...state.drawnNumbers, action.payload.num],
      };
    case BingoGameActionTypes.ResetData:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}

export const bingoGameFeatureSelector = createFeatureSelector<AppState, State>(bingoGameFeatureKey);
export const selectBoards = createSelector(
  bingoGameFeatureSelector,
  (state: State) => state.boards,
);
export const selectDrawnNumbers = createSelector(
  bingoGameFeatureSelector,
  (state: State) => state.drawnNumbers,
);
export const selectBingoNumbers = createSelector(
  bingoGameFeatureSelector,
  (state: State) => state.bingoNumbers,
);
export const selectGameIsRunning = createSelector(
  bingoGameFeatureSelector,
  (state: State) => state.gameIsRunning,
);
