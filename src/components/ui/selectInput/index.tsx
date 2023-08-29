import React from "react";
import { FieldProps } from "formik";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { transformText } from "@/helpers/transformText";
import { FormControl } from "@mui/material";

interface Item {
  value: string;
  label: string;
}

interface OwnProps {
  customClassNames?: string;
  disabled?: boolean;
  items: Item[];
  label: string;
  onChangeHandler?: (event: SelectChangeEvent) => void;
  placeholder?: string;
  value: string;
}

type Props = OwnProps & FieldProps;

const SelectInput: React.FC<Props> = ({
  customClassNames,
  disabled,
  field,
  form: { touched, errors },
  items,
  label,
  onChangeHandler,
  placeholder,
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
      <FormControl>
        <InputLabel id={`${transformText(label)}-select-helper-label`}>
          {label}
        </InputLabel>
        <Select
          disabled={disabled}
          error={isValid}
          label={label}
          labelId={`${transformText(label)}-select-helper-label`}
          {...field}
          {...props}
        >
          {placeholder && <MenuItem value="">{placeholder}</MenuItem>}
          {items.map((item, index) => (
            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
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

export default SelectInput;
