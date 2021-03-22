import React, { useContext } from 'react';
import Welcome from 'src/features/Snippets/Welcome';
import Terminal, { TerminalContext } from 'src/features/Terminal';

const Home = () => {
  const { append } = useContext(TerminalContext)
  return (
    <Terminal >
        <Welcome />
    </Terminal>
  );
}

export default Home;
