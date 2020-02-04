import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import { Board } from './models/board';
import { BingoGameActions, BingoGameActionTypes } from './bingo-game.actions';


export const bingoGameFeatureKey = 'bingoGame';

export interface State {
  boards: Board[],
}

export const initialState: State = {
  boards: [],
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
    default:
      return state;
  }
}

export const bingoGameFeatureSelector = createFeatureSelector<AppState, State>(bingoGameFeatureKey);
export const selectBoards = createSelector(
  bingoGameFeatureSelector,
  (state: State) => state.boards,
);
