import React, { createContext, FC, useState, ReactNode } from 'react';

type Terminal = {
  append: (nextComponent: ReactNode) => void,
  body: ReactNode | undefined
}
const initialContext: Terminal = {
  append: (nextComponent: ReactNode) => {},
  body: []
}
const TerminalContext = createContext(initialContext)
const TerminalJSX: FC = ({ children }) => {
  const [body, setBody] = useState([children]);

  const initialState = {
    append: (nextComponent: ReactNode) => setBody([...body, nextComponent]),
    body: children
  }

  return <TerminalContext.Provider value={initialState}>
    {body}
  </TerminalContext.Provider>;
}

export { TerminalContext };
export default TerminalJSX;
