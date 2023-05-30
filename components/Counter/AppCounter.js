import React from 'react';
import CounterLabel from './CounterLabel';
import ButtonCount from './Button';

export const AppCounter = () => {
  return (
    <div>
      <div>
        <CounterLabel />
      </div>
      <div>
        <ButtonCount />
      </div>
    </div>
  );
};
