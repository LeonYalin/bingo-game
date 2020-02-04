import { generateUUID, BINGO_MIN, BINGO_MAX, generateNumbers } from '../bingo-game.utils';

export class Board {
  id: string;
  numbers: number[] = [];

  constructor(public playerId: string, public size: number) {
    this.id = generateUUID();
    this.numbers = generateNumbers(BINGO_MIN, BINGO_MAX, size);
  }
}
