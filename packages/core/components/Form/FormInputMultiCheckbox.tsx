import React, { useEffect, useState } from "react";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { Controller } from "react-hook-form";
import { FormInputMultiCheckboxProps } from "./FormInputProps";

export const FormInputMultiCheckbox: React.FC<FormInputMultiCheckboxProps> = ({
  name,
  control,
  setValue,
  label,
  options,
  ...props
}: FormInputMultiCheckboxProps & CheckboxProps) => {
  const [selectedItems, setSelectedItems] = useState<any>([]);

  const handleSelect = (value: any) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item: any) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems: any) => [...prevItems, value]);
    }
  };

  useEffect(() => {
    setValue(name, selectedItems);
  }, [selectedItems]);

  return (
    <FormControl size={"small"} variant={"outlined"}>
      <FormLabel component="legend">{label}</FormLabel>

      <div>
        {options.map((option: any) => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  render={({}) => {
                    return (
                      <Checkbox
                        {...props}
                        checked={selectedItems.includes(option.value)}
                        onChange={() => handleSelect(option.value)}
                      />
                    );
                  }}
                  control={control}
                />
              }
              label={option.label}
              key={option.value}
            />
          );
        })}
      </div>
    </FormControl>
  );
};
