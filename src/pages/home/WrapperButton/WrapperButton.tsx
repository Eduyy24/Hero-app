import { FunctionComponent } from 'react';
import styles from './WrapperButton.module.css';

type Props = {
  children: JSX.Element
}

export const WrapperButton: FunctionComponent<Props> = ({children}) => {
  return <div className={styles.container}>{children}</div>
}