import { Controller } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({
  name,
  control,
  ...props
}: FormInputProps & TextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          {...props}
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};
