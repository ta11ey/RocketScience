import React from 'react';
import Prompt from 'src/components/Prompt';
import Line from 'src/components/Text/Line';
import useAsyncLayout from 'src/hooks/useAsyncLayout';

const Welcome = () => {
  const { order, setOrderItemsDone } = useAsyncLayout();
  return (<>
    { order(1) && (<Line onRenderComplete={() => setOrderItemsDone(1)}>
      Hello! I’m Jake Talley.
      You've landed on my online site
      Would you like to learn more?
      (Y/n)
      </Line>)
    }
    { order(2) && (
      <Prompt outcomes={[
          {
            match: 'y',
            render: "You did it!"
          }
        ]} />
      )
    }
  </>)
}
export default Welcome;
