import React from 'react';
import Circle from '../Circle/Circle';

import './selectItemBlock.scss';

const SelectItemBlock = ():JSX.Element => {
  const a = 1;
  console.log(a);

  return (
    <div className="selectItemBlock">
      <div className="common">
        <Circle />
      </div>
    </div>
  );
};

export default SelectItemBlock;
