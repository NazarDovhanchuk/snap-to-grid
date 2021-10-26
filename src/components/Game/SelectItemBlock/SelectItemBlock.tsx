/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Block from '../Square/Square';
import Circle from '../Circle/Circle';
import Triangle from '../Triangle/Triangle';

import './selectItemBlock.scss';

const SelectItemBlock = ():JSX.Element => {
  const [visibleSquare, setVisibleSquare] = useState(true);
  const [visibleCircle, setVisibleCircle] = useState(true);
  const [visibleTriangle, setVisibleTriangle] = useState(true);

  const dragOnDropHandler = (event: any): void => {
    const square = event.dataTransfer.getData('square');
    const circle = event.dataTransfer.getData('circle');
    const triangle = event.dataTransfer.getData('triangle');

    if (square === 'square') {
      setVisibleSquare(square);
    }

    if (circle === 'circle') {
      setVisibleCircle(circle);
    }

    if (triangle === 'triangle') {
      setVisibleTriangle(triangle);
    }

    event.preventDefault();
  };

  const dragOnOverHandler = (event: any): void => {
    event.preventDefault();
  };

  const dragEnd = (event: any): void => {
    const target = event.target.className;
    if (target === 'circle') {
      setVisibleCircle(false);
    }

    if (target === 'square') {
      setVisibleSquare(false);
    }

    if (target === 'triangle') {
      setVisibleTriangle(false);
    }

    event.preventDefault();
  };

  return (
    <>
      <div
        className="selectItemBlock"
      >
        <div
          className="common"
          onDrop={(e): void => dragOnDropHandler(e)}
          onDragOver={(e): void => dragOnOverHandler(e)}
          onDragEnd={(e): void => dragEnd(e)}
        >
          {visibleSquare && (
          <Block />
          )}
        </div>
        <div
          className="common"
          onDrop={(e): void => dragOnDropHandler(e)}
          onDragOver={(e): void => dragOnOverHandler(e)}
          onDragEnd={(e): void => dragEnd(e)}
        >
          {visibleCircle && (
          <Circle />
          )}
        </div>
        <div
          className="common"
          onDrop={(e): void => dragOnDropHandler(e)}
          onDragOver={(e): void => dragOnOverHandler(e)}
          onDragEnd={(e): void => dragEnd(e)}
        >
          {visibleTriangle && (
          <Triangle />
          )}
        </div>

      </div>
    </>

  );
};

export default SelectItemBlock;
