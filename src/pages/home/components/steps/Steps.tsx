import { WrapperSteps } from '../../../../components/wrapper-steps/WrapperSteps'
import styles from './Steps.module.css'

export const Steps = () => {
  return (
    <WrapperSteps>
      <progress value={50} max={100} />
    </WrapperSteps>
  )
}