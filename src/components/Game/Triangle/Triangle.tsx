/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import './triangle.scss';

const Triangle = (): JSX.Element => {
  const dragStartHandler = (event: any): void => {
    event.dataTransfer.setData('triangle', event.target.className);
  };

  const dragOnLeaveHandler = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  return (
    <div
      onDragStart={(e):void => dragStartHandler(e)}
      onDragLeave={(e):void => dragOnLeaveHandler(e)}
      className="triangle"
      draggable
    />
  );
};

export default Triangle;
