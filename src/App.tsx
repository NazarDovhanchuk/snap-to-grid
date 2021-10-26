/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import './App.scss';

import Board from './components/Game/Board/Board';
import SelectItemBlock from './components/Game/SelectItemBlock/SelectItemBlock';

const App = (): JSX.Element => (
  <div className="container">
    <Board />
    <SelectItemBlock />
  </div>
);

export default App;
