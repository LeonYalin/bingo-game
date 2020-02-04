import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromBingoGame from '../bingo-game/bingo-game.reducer';
import { InjectionToken } from '@angular/core';


export interface AppState {
  [fromBingoGame.bingoGameFeatureKey]: fromBingoGame.State,
}

export const reducers: ActionReducerMap<AppState> = {
  [fromBingoGame.bingoGameFeatureKey]: fromBingoGame.reducer,
};

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('App Reducers');
export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: reducers };

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
