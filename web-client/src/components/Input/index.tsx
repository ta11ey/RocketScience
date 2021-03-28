import React, { FormEvent, KeyboardEvent, useEffect, useRef, useState} from 'react';
import Cursor from '../Cursor';
import './style.css';

const Prompt = ({ handleKeyPressEvent }: { handleKeyPressEvent: (inputValue: string) => void} ) => {
  const [ value, setValue ] = useState('');
  const input = useRef(null);
  function handleChange(ev: FormEvent<HTMLDivElement>) {
      // @ts-ignore
      setValue(ev.target.value);
  }

  function handleKeyPress(ev: KeyboardEvent<HTMLDivElement>) {
      // @ts-ignore
    if (ev.key === 'Enter') {
      // @ts-ignore
      handleKeyPressEvent(ev.target.value)
    }
  }

  useEffect(() => {
    //@ts-ignore
    input.current.focus();
  }, [value])

  return (
    <div className="inputCursor">
      <input
        ref={input}
        className="div"
        autoFocus
        onKeyPress={(e) => handleKeyPress(e)}
        onChange={(e) => handleChange(e)}
        value={value}
        />
    {value}
    <Cursor />
    </div>
  )
};
export default Prompt;
