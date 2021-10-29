/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import './square.scss';

const Square = ({ background, className }: any): JSX.Element => {
  const color = background;

  const dragStartHandler = (event: any): void => {
    event.dataTransfer.setData('color', event.target.style.backgroundColor);
    event.dataTransfer.setData('index', event.target.className);
  };

  const dragEndHandler = (event: any): void => {
    event.preventDefault();
  };

  return (
    <div
      draggable
      className={className}
      style={{
        backgroundColor: `${color}`,
        margin: '0 auto',
        height: '150px',
        width: '100%',
      }}
      onDragStart={(e): void => dragStartHandler(e)}
      onDragEnd={(e): void => dragEndHandler(e)}
    />
  );
};

export default Square;
