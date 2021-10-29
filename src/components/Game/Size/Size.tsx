/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Square from '../Square/Square';

import './size.scss';

interface SizeProps {
  height: number,
  width: number
}

const Size = ({ height, width }: SizeProps): JSX.Element => {
  const square = height * width;
  const squareArr: any[] = [];
  for (let i = 1; i <= square; i++) {
    squareArr.push([]);
  }

  const [currentSquare, setCurrentSquare] = useState(squareArr);

  const dragOnDropHandler = (event: any): void => {
    const target = event.target.className.split(' ').slice(1).map(Number).join();

    const currentColor = event.dataTransfer.getData('color');
    console.log(currentColor);
    const currentBlock = [...currentSquare];
    currentBlock[target]?.push(currentColor);

    setCurrentSquare(currentBlock);

    /// delete block

    const currentIndex = event.dataTransfer.getData('index');

    if (currentIndex.length) {
      const deleteColor = event.dataTransfer.getData('color');
      const currentTarget = currentIndex.split(' ').slice(1).map(Number).join();
      const deleteBlock = currentBlock.map((el, index) => ((index === +currentTarget) ? el.filter((item: any) => item !== deleteColor) : el));

      setCurrentSquare(deleteBlock);
    }
  };

  const dragOnOverHandler = (event: any): void => {
    event.preventDefault();
  };

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${height},1fr)`,
        gridTemplateRows: `repeat(${width}, 1fr)`,
      }}
    >
      {currentSquare.map((item, index) => (
        <div
          key={index}
          className={`board__square ${index}`}
          onDrop={(e): void => dragOnDropHandler(e)}
          onDragOver={(e): void => dragOnOverHandler(e)}
        >
          {item.map((el: string) => (
            <>
              <Square
                // className={`board__square ${index}`}
                background={el}
              />
            </>
          ))}
        </div>
      ))}

    </div>
  );
};

export default Size;
