import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Grid = ({ grid }: { grid: number[][] }) => {
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
