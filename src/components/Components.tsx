import React from "react";
import { UseFormReturn } from "react-hook-form";
import { InputCheckbox, InputFile, InputSelect, InputText } from "./inputs/inputs";

const ComponentsList = {
  inputText: InputText,
  inputSelect: InputSelect,
  inputFile: InputFile,
  inputCheckbox: InputCheckbox
};

const Components = (field: Field, form: UseFormReturn<{}, object>, ) => {
    if (typeof ComponentsList[field.component] !== "undefined") {
      return React.createElement(ComponentsList[field.component], {
        key: field.key,
        field: field,
        form,
      });
    }
    return React.createElement(
      () => <div>The component {field.component} not exist.</div>,
      { key: field.key }
    );
}

export default Components;