import { FunctionComponent } from "react";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import styles from "./inputs.module.css";

type Props = {
  form: any;
  field: Field;
};

type PropsInput = {
  label: string;
  field?: ControllerRenderProps<FieldValues, string>;
  error: string;
  options?: string[];
  register?: any;
  values?: any;
};

export const Input: FunctionComponent<PropsInput> = ({ label, field, error }) => {
  return (
    <>
      <div className={styles.containerInput}>
        <label className={styles.label} htmlFor="input">
          {label}
        </label>
        <input data-testid='inputText' id="input" className={styles.inputText} {...field} />
      </div>
      {error && <p className={styles.inputError}>{error}</p>}
    </>
  );
};

export const Select: FunctionComponent<PropsInput> = ({
  label,
  field,
  error,
  options,
}) => (
  <>
    <div className={styles.containerSelect}>
      <label className={styles.label}>{label}</label>
      <select className={styles.selectInput} {...field}>
        <option value="">Seleccione</option>
        {options?.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    {error && <p className={styles.inputError}>{error}</p>}
  </>
);

export const PhotoFile: FunctionComponent<PropsInput> = ({
  label,
  error,
  field,
}) => {
  return (
    <>
      <div className={styles.containerInput}>
        <label className={styles.label} htmlFor="input">
          {label}
        </label>
        {field?.value && (
          <figure>
            <img className={styles.photo} src={field.value} alt="imagen" />
          </figure>
        )}
        <input
          type="file"
          name="image"
          ref={field?.ref}
          onChange={(e) => {
            const file = e.target.files ? e.target.files[0] : null
            field?.onChange(URL.createObjectURL(file!))
          }}
          className={styles.inputFile}
        />
      </div>
      {error && <p className={styles.inputError}>{error}</p>}
    </>
  );
};

export const Checkbox: FunctionComponent<PropsInput> = ({
  label,
  field,
  error,
}) => (
  <>
    <div className={styles.containerSelect}>
      <label className={styles.label}>{label}</label>
      <input checked={field?.value} className={styles.checkbox} type='checkbox' {...field} />
    </div>
    {error && <p className={styles.inputError}>{error}</p>}
  </>
);

export const InputText: FunctionComponent<Props> = ({
  field: { label, rules, key },
  form: {
    control,
    formState: { errors },
  },
}) => {
  return (
    <Controller
      name={key}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Input field={field} label={label} error={errors[key]?.message || ""} />
      )}
    />
  );
};

export const InputSelect: FunctionComponent<Props> = ({
  field: { label, rules, options, key },
  form: {
    control,
    formState: { errors },
  },
}) => {
  return (
    <Controller
      name={key}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Select
          field={field}
          error={errors[key]?.message || ""}
          label={label}
          options={options}
        />
      )}
    />
  );
};

export const InputFile: FunctionComponent<Props> = ({
  field: { label, rules, key },
  form: {
    control,
    formState: { errors },
  },
}) => {
  return (
    <Controller
      name={key}
      control={control}
      rules={rules}
      render={({ field }) => (
        <PhotoFile
          label={label}
          error={errors[key]?.message || ""}
          field={field}
        />
      )}
    />
  );
};

export const InputCheckbox: FunctionComponent<Props> = ({
  field: { label, rules, key },
  form: {
    control,
    formState: { errors },
  },
}) => {
  return (
    <Controller
      name={key}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Checkbox
          label={label}
          error={errors[key]?.message || ""}
          field={field}
        />
      )}
    />
  );
};
