/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { useDrop } from 'react-dnd';
import Block from '../Block/Block';

import './box.scss';

const Box = ({ card, moveCard }: any): JSX.Element => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'block',
    drop: () => moveCard(),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  console.log(moveCard);
  return (
    <div
      className="box"
      ref={dropRef}
      style={{ backgroundColor: isOver ? '#000' : '#fff' }}
    >
      {card ? <Block /> : ''}
    </div>
  );
};

export default Box;
