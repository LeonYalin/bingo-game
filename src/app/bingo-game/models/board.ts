import { generateUUID, BINGO_MIN, BINGO_MAX, generateNumbers, BOARD_SIZE } from '../bingo-game.utils';

export class Board {
  id: string;
  numbers: number[] = [];

  constructor(public size: number = BOARD_SIZE) {
    this.id = generateUUID();
    this.numbers = generateNumbers(BINGO_MIN, BINGO_MAX, size);
  }
}
