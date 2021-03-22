import React, { FC, useLayoutEffect, useRef, useState, ReactNode } from 'react';
import Cursor from 'src/components/Cursor';

type LineProps =  {
  children: ReactNode;
  onRenderComplete?: () =>  void;
}
const wait = (time: number) => new Promise(resolve => setTimeout(resolve, time));
const Line = ({ children, onRenderComplete }: LineProps) => {
  const [text, setText] = useState('');
  const [writingState, setWritingState] = useState(true);
  const chars = useRef(JSON.stringify(children).split(""));
  const delay = 20;
  const nextCharIndex = text.length;

  useLayoutEffect(() => {
    async function setChar() {
      if (text.length < chars.current.length) {
        await wait(delay);
        setText(text + chars.current[nextCharIndex]);
      } else if (text.length === chars.current.length) {
        setWritingState(false)
        onRenderComplete && onRenderComplete();
      }
    }
    setChar();
  })

  return (
    <div>
      $ {text}
      {writingState && <Cursor />}
    </div>
  )
}

export default Line;
