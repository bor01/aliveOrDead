
import { COLUMNS_SIZE, ROWS_SIZE } from '../constants';
import { initGame, runGame } from './game'; 

describe('initGame', () => {
  test('should return a 2D grid with the correct dimensions', () => {
    const grid = initGame();
    expect(grid.length).toBe(ROWS_SIZE);
    expect(grid[0].length).toBe(COLUMNS_SIZE);
  });

  test('should contain only 0 or 1 values', () => {
    const grid = initGame();
    grid.forEach(row => {
      row.forEach(cell => {
        expect(cell).toBeGreaterThanOrEqual(0);
        expect(cell).toBeLessThanOrEqual(1);
      });
    });
  });
});

describe('runGame', () => {
  test('should return an updated grid with the correct dimensions', () => {
    const initialGrid = initGame();
    const updatedGrid = runGame(initialGrid);
    expect(updatedGrid.length).toBe(ROWS_SIZE);
    expect(updatedGrid[0].length).toBe(COLUMNS_SIZE);
  });
  
  test('should return init new Game if inital grid is undefined', () => {
    const grid = runGame(undefined);
    expect(grid.length).toBe(ROWS_SIZE);
    expect(grid[0].length).toBe(COLUMNS_SIZE);
  });
});
