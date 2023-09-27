import React, { useState } from 'react';
import { initGrid, runSimulation } from '../../utils/grid';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { useInterval } from '../../hooks/useInterval';
import { REFRESH_DELAY } from '../../constants';

const Grid = () => {
    const [grid, setGrid] = useState(initGrid());
    useInterval(() => {
        const newGrid = runSimulation(grid);
        setGrid(newGrid);
    }, REFRESH_DELAY);

    return (
        <div className={styles.grid}>
            {grid.map((row, i) => (
                <div key={i} className={styles.row}>
                    {row.map((cell, index) => (
                        <div
                            className={classNames(styles.cell, {
                                [styles.dark]: cell,
                            })}
                            key={index}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid;
