/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import './circle.scss';

const Circle = (): JSX.Element => {
  const dragStartHandler = (event: any): void => {
    event.dataTransfer.setData('circle', event.target.className);
  };

  const dragOnLeaveHandler = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  return (
    <div
      onDragStart={(e):void => dragStartHandler(e)}
      onDragLeave={(e):void => dragOnLeaveHandler(e)}
      className="circle"
      draggable
    />
  );
};

export default Circle;
