import React from 'react';
import Square from '../Square/Square';

import './selectItemBlock.scss';

const SelectItemBlock = ():JSX.Element => (
  <>
    <div
      className="selectItemBlock"
    >
      <div
        className="common"
      >
        <Square background="black" />
        <Square background="red" />
        <Square background="purple" />
        <Square background="green" />
        <Square background="blue" />
      </div>

    </div>
  </>

);

export default SelectItemBlock;
