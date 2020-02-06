import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BingoGameActionTypes, DrawNumber, EndGame } from './bingo-game.actions';
import { switchMap, map, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { interval, of } from 'rxjs';
import { BINGO_MIN, BINGO_MAX, generateNumbers, getRandomInt } from './bingo-game.utils';


@Injectable()
export class BingoGameEffects {

  @Effect()
  drawNumber$ = this.actions$.pipe(
    ofType(BingoGameActionTypes.StartGame),
    switchMap(res => {
      const pool = generateNumbers(BINGO_MIN, BINGO_MAX, BINGO_MAX);
      return interval(2000).pipe(
        takeWhile(_ => pool.length > 0),
        map(() => {
          const index = getRandomInt(0, pool.length - 1);
          const num = pool[index];
          pool.splice(index, 1);
          const dn = new DrawNumber({ num });
          if (pool.length === 0) {
            const eg = new EndGame();
          }
          return dn;
        }),
      );
    })
  );

  constructor(private actions$: Actions) { }

}
