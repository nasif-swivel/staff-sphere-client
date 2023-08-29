import React from "react";
import { FieldProps } from "formik";
import { TextField } from "@mui/material";

type TextType = "text" | "password" | "number";

interface OwnProps {
  customClassNames?: string;
  disabled?: boolean;
  label: string;
  onChangeHandler?: (input: string | number) => void;
  placeholder?: string;
  type?: TextType;
  value: string | number;
}

type Props = OwnProps & FieldProps;

const TextInput: React.FC<Props> = ({
  customClassNames,
  disabled,
  field,
  form: { touched, errors },
  label,
  onChangeHandler,
  placeholder,
  type = "text",
  value,
  ...props
}) => {
  const isValid = touched[field.name] && errors[field.name] ? true : false;

  return (
    <div
      className={`flex flex-col w-full${
        customClassNames ? ` ${customClassNames}` : ""
      }`}
    >
      <TextField
        id="outlined-basic"
        disabled={disabled}
        error={isValid}
        label={label}
        placeholder={placeholder}
        type={type}
        variant="outlined"
        {...field}
        {...props}
      />
      <span
        className={`text-red-600 text-xs h-4 mt-1 ml-3 ${
          isValid ? "visible" : "invisible"
        }`}
      >
        {isValid ? `${errors[field.name]}` : ""}
      </span>
    </div>
  );
};

export default TextInput;
