import { FunctionComponent } from "react";
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import { regEmail } from "../../utils/regExpretions";
import { FIELD_REQUIRED, INVALID_EMAIL } from "../../utils/strings";
import styles from "./inputs.module.css";

type Props = {
  control: unknown;
  name: string;
  field: Field;
};

const Input = ({
  label,
  field,
}: {
  label: string;
  field: ControllerRenderProps<FieldValues, string>;
}) => {
  return (
    <>
      <label className={styles.label} htmlFor="input">{label}</label>
      <input id="input" className={styles.inputText} {...field} />
    </>
  );
};

export const InputText: FunctionComponent<Props> = ({
  control,
  name,
  field: { label },
}) => {
  return (
    <Controller
      name={name}
      control={control as Control}
      rules={{ required: true }}
      render={({ field }) => <Input field={field} label={label} />}
    />
  );
};

export const InputEmail: FunctionComponent<Props> = ({
  control,
  name,
  field: { label },
}) => {
  return (
    <Controller
      name={name}
      control={control as Control}
      rules={{
        required: { value: true, message: FIELD_REQUIRED },
        pattern: { value: regEmail, message: INVALID_EMAIL },
      }}
      render={({ field }) => <Input field={field} label={label} />}
    />
  );
};
