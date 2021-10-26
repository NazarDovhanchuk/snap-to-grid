/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

import './block.scss';

const Square = (): JSX.Element => {
  const dragStartHandler = (event: any) => {
    event.dataTransfer.setData('className', event.target.className);
  };

  const dragOnLeaveHandler = (event: any) => {
    event.preventDefault();
  };

  return (
    <div
      draggable
      className="square"
      onDragStart={(e) => dragStartHandler(e)}
      onDragLeave={(e) => dragOnLeaveHandler(e)}
    />
  );
};

export default Square;
