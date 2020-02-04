import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatIconModule, MatButtonModule } from '@angular/material';
import { BingoGameRoutingModule } from './bingo-game-routing.module';
import { BingoGameComponent } from './bingo-game.component';
import { PlayerBoardComponent } from './bingo-board/player-board.component';
import { BingoGameHeaderComponent } from './bingo-game-header/bingo-game-header.component';
import { BingoGameContentComponent } from './bingo-game-content/bingo-game-content.component';


@NgModule({
  declarations: [BingoGameComponent, PlayerBoardComponent, BingoGameHeaderComponent, BingoGameContentComponent],
  imports: [
    CommonModule,
    BingoGameRoutingModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class BingoGameModule { }
