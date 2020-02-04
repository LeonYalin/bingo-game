export const BINGO_MIN = 1;
export const BINGO_MAX = 53;
export const BOARD_SIZE = 5;

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

  for (let i = 0; i < size ** 2; i++) {
    const index = getRandomInt(0, pool.length - 1);
    numbers.push(pool[index]);
    pool.splice(index, 1);
  }

  return numbers;
}
