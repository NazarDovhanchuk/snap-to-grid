/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Square from '../Block/Block';

import './board.scss';

const Board = (): JSX.Element => {
  const [position, setPosition] = useState([0, 0]);

  console.log(position);

  const dragOnDropHandler = (event: any) => {
    event.preventDefault();
    event.dataTransfer.getData('className');
    const pos = event.target.className.split(' ').slice(1).map(Number);
    setPosition(pos);
  };

  const dragOnOverHandler = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  const renderSquare = ([x, y]: number[], [blockX, blockY]: number[]): JSX.Element => {
    const rowMap = (num: number) => {
      const arr = [];

      for (let i = 0; i < num; i++) {
        arr.push(i);
      }

      return arr;
    };

    const columnMap = (num: number) => {
      const arr = [];

      for (let i = 0; i < num; i++) {
        arr.push(i);
      }

      return arr;
    };
    const resultColumn: number[] = columnMap(y);
    const resultRow: number[] = rowMap(x);

    return (
      <div className="board">
        {resultRow.map((item: number, index: number) => (
          <div key={item} className="board__row">
            {resultColumn.map((el) => (
              <div
                onDrop={(e) => dragOnDropHandler(e)}
                onDragOver={(e) => dragOnOverHandler(e)}
                key={el}
                className={`board__square ${el} ${index}`}
              >
                {(blockX === el && blockY === index) ? <Square /> : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const squares = [];
  squares.push(renderSquare([5, 5], position));

  return (
    <>
      {squares}
    </>
  );
};

export default Board;
