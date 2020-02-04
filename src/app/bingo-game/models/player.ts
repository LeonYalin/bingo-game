import { generateUUID } from '../bingo-game.utils';

export class Player {
  id: string;
  constructor(public name: string) {
    this.id = generateUUID();
  }
}
