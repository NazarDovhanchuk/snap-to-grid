/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.scss';
import SelectItemBlock from './components/Game/SelectItemBlock/SelectItemBlock';
import Size from './components/Game/Size/Size';

const App = (): JSX.Element => (
  <div className="container">
    <Size height={5} width={2} />
    <SelectItemBlock />
  </div>
);

export default App;
