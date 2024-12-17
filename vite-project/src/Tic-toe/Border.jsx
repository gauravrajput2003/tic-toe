import React, { useState } from 'react';
import Square from './Square.jsx';

const checkWinner = (state) => {
  const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let logic of winner) {
    const [a, b, c] = logic;
    if (state[a] && state[a] === state[b] && state[a] === state[c]) {
      return state[a];
    }
  }
  return false;
};

const Border = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    const copy = [...state];
    if (copy[index] || checkWinner(state)) return; // Prevent overwriting and clicking after game over
    copy[index] = isXTurn ? 'X' : 'O';
    setState(copy);
    setIsXTurn(!isXTurn);
  };

  const winner = checkWinner(state);

  return (
    <div className='border border-sky-500 border-width w-[300px] h-[242px] m-auto flex flex-col justify-between items-center my-20 bg-yellow-400'>
      {winner ? (
        <h2 className='text-2xl font-bold'>{winner} wins!</h2>
      ) : (
        <>
          <div className='flex flex-row justify-between w-full'>
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className='flex flex-row justify-between w-full'>
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className='flex flex-row justify-between w-full'>
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Border;