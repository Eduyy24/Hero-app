import React from "react";
import { InputSelect, InputText } from "./inputs/inputs";

const ComponentsList = {
  inputText: InputText,
  inputSelect: InputSelect,
};

const Components = (field: Field, control: unknown, errors: any) => {
    if (typeof ComponentsList[field.component] !== "undefined") {
      return React.createElement(ComponentsList[field.component], {
        key: field.key,
        field: field,
        control,
        name: field.key,
        error: errors[field.key]?.message || ''
      });
    }
    return React.createElement(
      () => <div>The component {field.component} not exist.</div>,
      { key: field.key }
    );
}

export default Components;