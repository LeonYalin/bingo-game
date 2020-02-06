import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BingoGameActionTypes, DrawNumber, EndGame, ResetData } from './bingo-game.actions';
import { switchMap, map, takeWhile } from 'rxjs/operators';
import { interval, of } from 'rxjs';
import { BINGO_MIN, BINGO_MAX, generateNumbers, getRandomInt } from './bingo-game.utils';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';


@Injectable()
export class BingoGameEffects {
  private drawIsActive = false;

  @Effect()
  drawNumber$ = this.actions$.pipe(
    ofType(BingoGameActionTypes.StartGame),
    switchMap(res => {
      this.snackBar.open('Game started', null, {
        panelClass: 'app-snack-bar',
        duration: 1500,
      });
      const pool = generateNumbers(BINGO_MIN, BINGO_MAX, BINGO_MAX);
      this.drawIsActive = true;
      return interval(200).pipe(
        takeWhile(_ => (pool.length > 0 && this.drawIsActive)),
        map(() => {
          const index = getRandomInt(0, pool.length - 1);
          const num = pool[index];
          pool.splice(index, 1);
          const dn = new DrawNumber({ num });
          if (pool.length === 0) {
            const eg = new EndGame();
            this.drawIsActive = false;
          }
          return dn;
        }),
      );
    })
  );

  @Effect()
  bingo$ = this.actions$.pipe(
    ofType(BingoGameActionTypes.Bingo),
    switchMap(res => {
      this.drawIsActive = false;
      this.snackBar.open('Game Ended', 'Start a new game', {
        panelClass: 'app-snack-bar',
      }).afterDismissed().subscribe(result => {
        if (result.dismissedByAction) {
          this.store.dispatch(new ResetData());
        }
      });
      return of (new EndGame());
    })
  );

  constructor(private actions$: Actions, private snackBar: MatSnackBar, private store: Store<AppState>) { }

}
