/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

import './square.scss';

const Square = (): JSX.Element => {
  const dragStartHandler = (event: any) => {
    event.dataTransfer.setData('square', event.target.className);
  };

  return (
    <div
      draggable
      className="square"
      onDragStart={(e) => dragStartHandler(e)}
    />
  );
};

export default Square;
