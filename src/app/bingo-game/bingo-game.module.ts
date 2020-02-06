import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatIconModule, MatButtonModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { BingoGameRoutingModule } from './bingo-game-routing.module';
import { BingoGameComponent } from './bingo-game.component';
import { BingoBoardComponent } from './bingo-board/bingo-board.component';
import { EffectsModule } from '@ngrx/effects';
import { BingoGameEffects } from './bingo-game.effects';
import { BingoHeaderComponent } from './bingo-header/bingo-header.component';
import { BingoDrawnNumbersComponent } from './bingo-drawn-numbers/bingo-drawn-numbers.component';
import { BingoBoardsListComponent } from './bingo-boards-list/bingo-boards-list.component';


@NgModule({
  declarations: [BingoGameComponent, BingoBoardComponent, BingoHeaderComponent, BingoDrawnNumbersComponent, BingoBoardsListComponent],
  imports: [
    CommonModule,
    BingoGameRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    EffectsModule.forFeature([BingoGameEffects]),
  ]
})
export class BingoGameModule { }
