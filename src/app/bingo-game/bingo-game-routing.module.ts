import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BingoGameComponent } from './bingo-game.component';


const routes: Routes = [
  { path: '', component: BingoGameComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BingoGameRoutingModule { }
