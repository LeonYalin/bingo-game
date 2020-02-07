import { Board } from './models/board';

export const BINGO_MIN = 1;
export const BINGO_MAX = 53;
export const BOARD_SIZE = 5;
export const DRAW_INTERVAL = 2000;

export function generateUUID(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function getRandomNum(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function generateNumbers(min: number, max: number, size: number) {
  const numbers = [];
  const pool = [];

  for (let i = min; i < max; i++) {
    pool.push(i);
  }

  for (let i = 0; i < size; i++) {
    if (pool.length === 0) { break; }
    const index = getRandomInt(0, pool.length - 1);
    numbers.push(pool[index]);
    pool.splice(index, 1);
  }

  return numbers;
}

function hasBingoInRow(board: Board, index: number, drawnNumbers: number[]): [boolean, number[]] {
  const rowNumbers: number[] = [];
  for (let i = 0; i < board.size; i++) {
    rowNumbers.push(board.numbers[(index * board.size) + i]);
  }
  const isBingo = rowNumbers.every(num => drawnNumbers.includes(num));
  return [isBingo, rowNumbers];
}

function hasBingoInColumn(board: Board, index: number, drawnNumbers: number[]): [boolean, number[]] {
  const columnNumbers: number[] = [];
  for (let i = 0; i < board.size; i++) {
    columnNumbers.push(board.numbers[index + (i * board.size)]);
  }
  const isBingo = columnNumbers.every(num => drawnNumbers.includes(num));
  return [isBingo, columnNumbers];
}

function hasBingoInDiagonal(board: Board, drawnNumbers: number[], side: 'left' | 'right'): [boolean, number[]] {
  const diagonalNumbers: number[] = [];
  switch (side) {
    case 'left':
      for (let i = 0; i < board.size; i++) {
        diagonalNumbers.push(board.numbers[(i * board.size) + i]);
      };
      break;
    case 'right':
      for (let i = 0; i < board.size; i++) {
        diagonalNumbers.push(board.numbers[(i * board.size) + ((board.size - 1) - i)]);
      };
      break;
  }
  const isBingo = diagonalNumbers.every(num => drawnNumbers.includes(num));
  return [isBingo, diagonalNumbers];
}

export function hasBingo(board: Board, drawnNumbers: number[]): [boolean, number[]] {
  for (let i = 0; i < board.size; i++) {
    const [isBingoInRow, rowNumbers] = hasBingoInRow(board, i, drawnNumbers);
    if (isBingoInRow) {
      return [true, rowNumbers];
    }

    const [isBingoInColumn, columnNumbers] = hasBingoInColumn(board, i, drawnNumbers);
    if (isBingoInColumn) {
      return [true, columnNumbers];
    }
  }

  const [isBingoIndiagonalLeft, diagonalNumbersLeft] = hasBingoInDiagonal(board, drawnNumbers, 'left');
  if (isBingoIndiagonalLeft) {
    return [true, diagonalNumbersLeft];
  }

  const [isBingoIndiagonalRight, diagonalNumbersRight] = hasBingoInDiagonal(board, drawnNumbers, 'right');
  if (isBingoIndiagonalRight) {
    return [true, diagonalNumbersRight];
  }

  return [false, []];
}
