import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Board } from '../models/board';
import { hasBingo } from '../bingo-game.utils';
import { Subject, BehaviorSubject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import * as fromBingoGame from '../bingo-game.reducer';


@Component({
  selector: 'app-bingo-boards-list',
  templateUrl: './bingo-boards-list.component.html',
  styleUrls: ['./bingo-boards-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BingoBoardsListComponent implements OnInit, OnChanges {
  @Input() boards: Board[];
  @Input() drawnNumbers: number[];
  @Input() bingoNumbers: number[];

  @Output() bingo = new EventEmitter<{ board: Board, bingoNumbers: number[] }>();
  nums = new BehaviorSubject<number[]>([]);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

  }

  isBingo(board: Board): boolean {
    const [isBingo, bingoNumbers] = hasBingo(board, this.drawnNumbers);
    if (isBingo) {
      this.bingo.emit({ board, bingoNumbers });
    }
    return isBingo;
  }
}
