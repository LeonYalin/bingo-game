export class Board {
  id: string;
  numbers: number[][];

  constructor(public playerId: string) {
    this.generateNumbers();
  }

  generateNumbers() {
    // TODO:
  }
}
