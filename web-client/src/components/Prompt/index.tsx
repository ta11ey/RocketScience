import React, {ReactNode, useContext} from 'react';
import { TerminalContext } from 'src/features/Terminal';
import Input from 'src/components/Input';
import styles from './index.module.scss';

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
    return outcomes.find((outcome) => (outcome.match === input))?.render
  }
  return (
    <div className={styles.prompt}>
      {`>>>`}
      <Input
        handleKeyPressEvent={(inputValue: string) => append(match(inputValue))}/>
    </div>
  )
};
export default Prompt;
