/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import './App.scss';

import Box from './components/Box/Box';
import Square from './components/Square/Square';

const App = (): JSX.Element => {
  const [index, setIndex] = useState(1);

  const moveCard = (i: number) => {
    setIndex(i);
  };

  return (
    <>
      <div className="container">
        {/* <Square row={5} column={5} /> */}
        <Box card={index === 1} moveCard={moveCard.bind(null, 1)} />
        <Box card={index === 2} moveCard={moveCard.bind(null, 2)} />
        <Box card={index === 3} moveCard={moveCard.bind(null, 3)} />
        <Box card={index === 4} moveCard={moveCard.bind(null, 4)} />
        <Box card={index === 5} moveCard={moveCard.bind(null, 5)} />
        <Box card={index === 6} moveCard={moveCard.bind(null, 6)} />
        <Box card={index === 7} moveCard={moveCard.bind(null, 7)} />
        <Box card={index === 8} moveCard={moveCard.bind(null, 8)} />
        <Box card={index === 9} moveCard={moveCard.bind(null, 9)} />
        <Box card={index === 10} moveCard={moveCard.bind(null, 10)} />
        <Box card={index === 11} moveCard={moveCard.bind(null, 11)} />
        <Box card={index === 12} moveCard={moveCard.bind(null, 12)} />
      </div>

    </>
  );
};

export default App;
