import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatIconModule, MatButtonModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { BingoGameRoutingModule } from './bingo-game-routing.module';
import { BingoGameComponent } from './bingo-game.component';
import { BingoBoardComponent } from './bingo-board/bingo-board.component';
import { EffectsModule } from '@ngrx/effects';
import { BingoGameEffects } from './bingo-game.effects';


@NgModule({
  declarations: [BingoGameComponent, BingoBoardComponent],
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
