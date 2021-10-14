/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { useDrag } from 'react-dnd';

import './block.scss';

const Block = (): JSX.Element => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'block',
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div
      className="block"
      ref={dragRef}
      style={{
        backgroundColor: isDragging ? '#fff' : '#000',
      }}
    />
  );
};

export default Block;
