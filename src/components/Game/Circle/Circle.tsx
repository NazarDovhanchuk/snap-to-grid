import React from 'react';

import './circle.scss';

const Circle = (): JSX.Element => {
  const a = 1;
  console.log(a);

  return (
    <div className="circle" draggable />
  );
};

export default Circle;
