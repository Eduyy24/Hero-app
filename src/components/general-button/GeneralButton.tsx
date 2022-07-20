import { FunctionComponent } from 'react';
import styles from './GeneralButton.module.css'

type Props = {
  name: string;
}
export const GeneralButton: FunctionComponent<Props> = (props) => {
  const {name = ''} = props;
  return <button name={name} className={styles.generalButton}>{name}</button>
}