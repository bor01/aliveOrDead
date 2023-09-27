import { COLUMNS_SIZE, POSITIONS, ROWS_SIZE } from "../constants";

export const initGrid = () => {
    const grid = [];
    for (let i = 0; i < ROWS_SIZE; i++) {
        const row = [];
        for (let j = 0; j < COLUMNS_SIZE; j++) {
            row.push(Math.floor(Math.random() * 2));
        }
        grid.push(row);
    }
    return grid;
};

export const runSimulation = (
    grid: number[][]
) => {
        return grid.map((row, i) => {
            return row.map((_, j) => {
                let sum = 0;
                POSITIONS.forEach((position) => {
                    const x = i + position[0];
                    const y = j + position[1];
                    if (x >= 0 && x < ROWS_SIZE && y >= 0 && y < COLUMNS_SIZE) {
                        sum += grid[x][y];
                    }
                });

                if (sum < 2 || sum > 3) {
                    return 0;
                }
                if (sum === 3) {
                    return 1;
                }
                return grid[i][j];
            });
        });
};