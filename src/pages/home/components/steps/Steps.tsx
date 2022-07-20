import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import { WrapperSteps } from "../../../../components/wrapper-steps/WrapperSteps";
import logoHero from "../../../../assets/superhero.png";
import styles from "./Steps.module.css";
import { FunctionComponent } from "react";
import Components from "../../../../components/Components";
import { GeneralButton } from "../../../../components/general-button/GeneralButton";
import { NAME_BUTTON_STEPS } from "../../../../utils/strings";
import { useForm } from "react-hook-form";

type Props = {
  currentPage: PageData;
  totalPages: number;
};

export const Steps: FunctionComponent<Props> = ({
  currentPage,
  totalPages,
}) => {
  const fieldsKey = currentPage
    .fields
    .map((field) => field.key)

  const defaultValues = fieldsKey.reduce((accumulator, value) => {
    return {...accumulator, [value]: ''};
  }, {});

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <WrapperSteps>
      <>
        <img className={styles.logo} src={logoHero} alt="logo hero" />
        <ProgressBar value={currentPage.order} max={totalPages} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentPage.fields.map((field) => Components(field, control))}
          <div className={styles.containerButton}>
            <GeneralButton
              onClick={() => {}}
              name={NAME_BUTTON_STEPS}
            />
          </div>
        </form>
      </>
    </WrapperSteps>
  );
};
