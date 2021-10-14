/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Box from '../Box/Box';

import './square.scss';

const Square = ({ row, column }: { row: number, column: number }): JSX.Element => {
  const rowMap = (num: number): number[] => {
    const arr = [];

    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }

    return arr;
  };

  const resultRow = rowMap(row);

  const columnMap = (num: number): number[] => {
    const arr = [];

    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }

    return arr;
  };

  const resultColumn = columnMap(column);

  return (
    <>
      {resultRow.map((el, index) => (
        <Box key={index} card={index === 1} moveCard={index}>
          {resultColumn.map((node) => (
            <div
              className="column"
              key={node}
            />
          ))}
        </Box>
      ))}
    </>
  );
};

export default Square;
