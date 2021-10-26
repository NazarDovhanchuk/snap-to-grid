/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { children } from 'solid-js';
import Square from '../Square/Square';
import Circle from '../Circle/Circle';
import Triangle from '../Triangle/Triangle';

import './board.scss';

const Board = (): JSX.Element => {
  const [blockPosition, setBlockPosition] = useState([]);
  const [circlePosition, setCirclePosition] = useState([]);
  const [trianglePosition, setTrianglePosition] = useState([]);

  const dragOnDropHandler = (event: any): void => {
    const target = event.target.className.split(' ').slice(1).map(Number);
    const square = event.dataTransfer.getData('square');
    const circle = event.dataTransfer.getData('circle');
    const triangle = event.dataTransfer.getData('triangle');

    if (square === 'square') {
      setBlockPosition(target);
    }

    if (circle === 'circle') {
      setCirclePosition(target);
    }

    if (triangle === 'triangle') {
      setTrianglePosition(target);
    }

    event.preventDefault();
  };

  const dragOnOverHandler = (event: { preventDefault: () => void; }): void => {
    event.preventDefault();
  };

  const dragEnd = (event: any): void => {
    const target = event.target.className;

    if (target === 'square') {
      setBlockPosition([]);
    }

    if (target === 'circle') {
      setCirclePosition([]);
    }

    if (target === 'triangle') {
      setTrianglePosition([]);
    }

    event.preventDefault();
  };

  const renderSquare = ([x, y]: number[]): JSX.Element => {
    const rowMap = (num: number): number[] => {
      const arr = [];

      for (let i = 0; i < num; i++) {
        arr.push(i);
      }

      return arr;
    };

    const columnMap = (num: number): number[] => {
      const arr = [];

      for (let i = 0; i < num; i++) {
        arr.push(i);
      }

      return arr;
    };
    const resultColumn = columnMap(y);
    const resultRow = rowMap(x);

    return (
      <div className="board">
        {resultRow.map((item: number, index: number) => (
          <div key={item} className="board__row">
            {resultColumn.map((el) => (
              <div
                onDragEnd={(e): void => dragEnd(e)}
                onDrop={(e): void => dragOnDropHandler(e)}
                onDragOver={(e): void => dragOnOverHandler(e)}
                key={el}
                className={`board__square ${el} ${index}`}
                id={`circle ${el} ${index}`}
              >
                {(blockPosition[0] === el && blockPosition[1] === index) ? <Square /> : null}
                {(circlePosition[0] === el && circlePosition[1] === index) ? <Circle /> : null}
                {(trianglePosition[0] === el && trianglePosition[1] === index) ? <Triangle /> : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const squares = [];
  squares.push(renderSquare([5, 5]));

  return (
    <>
      {squares}
    </>
  );
};

export default Board;
