import React, { useState } from 'react';
import { initGame, runGame } from '../../utils/game';
import { useInterval } from '../../hooks/useInterval';
import { REFRESH_DELAY } from '../../constants';
import Grid from '../Grid';

const Game = () => {
    const [grid, setGrid] = useState(initGame());
    useInterval(() => {
        const newGrid = runGame(grid);
        setGrid(newGrid);
    }, REFRESH_DELAY);

    return <Grid grid={grid} />;
};

export default Game;
