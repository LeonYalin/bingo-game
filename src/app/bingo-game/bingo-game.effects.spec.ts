import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BingoGameEffects } from './bingo-game.effects';

describe('BingoGameEffects', () => {
  let actions$: Observable<any>;
  let effects: BingoGameEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BingoGameEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<BingoGameEffects>(BingoGameEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
