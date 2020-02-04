import { Player } from './player';
import { Board } from './board';

export class PlayerBoard {
  constructor(public player: Player, public board: Board) {
  }
}
