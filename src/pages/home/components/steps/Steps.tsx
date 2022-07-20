import { ProgressBar } from '../../../../components/progress-bar/ProgressBar'
import { WrapperSteps } from '../../../../components/wrapper-steps/WrapperSteps'
import logoHero from '../../../../assets/superhero.png'
import styles from './Steps.module.css'
import { FunctionComponent } from 'react'

type Props = {
  currentPage: PageData;
  totalPages: number;
}
export const Steps: FunctionComponent<Props> = ({currentPage, totalPages}) => {
  return (
    <WrapperSteps>
      <>
        <img className={styles.logo} src={logoHero} alt="logo hero" />
        <ProgressBar value={currentPage.order} max={totalPages}/>
      </>
    </WrapperSteps>
  )
}