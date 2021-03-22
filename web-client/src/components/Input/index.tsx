import React, {ReactNode, useState} from 'react';
import { TerminalContext } from 'src/features/Terminal';
import './style.css';

const Prompt = ({ handleKeyPressEvent }: { handleKeyPressEvent: (inputValue: string) => void} ) => {
  const { value, setValue } = useState('');

  function handleKeyPress(ev: React.KeyboardEvent<HTMLInputElement>) {
    if (ev.key === 'Enter') {
      // @ts-ignore
      handleKeyPressEvent(ev.target.value)
    }
  }
  return (
    <div
      onKeyDown={handleKeyPress}>
      {value}
    </div>

  )
};
export default Prompt;
