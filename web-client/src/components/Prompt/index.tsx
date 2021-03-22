import React, {ReactNode, useContext} from 'react';
import Line from 'src/components/Text/Line';
import { TerminalContext } from 'src/features/Terminal';
import Input from 'src/components/Input';
type Case = {
  match: string,
  render: ReactNode
}
type PromptProps = {
  outcomes: Case[]
}
const Prompt = ({ outcomes }: PromptProps) => {
  const { append } = useContext(TerminalContext);
  function match (input: string) {
    return outcomes.find((outcome) => (outcome.match === input))
  }
  return (
    <div>
      {`>>>`}
      <Input
        handleKeyPressEvent={(inputValue: string) => append(match(inputValue))}/>
    </div>
  )
};
export default Prompt;
