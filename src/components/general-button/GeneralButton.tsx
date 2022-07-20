import { FunctionComponent } from 'react';
import styles from './GeneralButton.module.css'

type Props = {
  name: string;
  onClick: EmptyFunction;
}
export const GeneralButton: FunctionComponent<Props> = (props) => {
  const {name = '', onClick} = props;
  return <button onClick={onClick} name={name} className={styles.generalButton}>{name}</button>
}