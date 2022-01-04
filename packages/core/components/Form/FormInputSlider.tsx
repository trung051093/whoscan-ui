import React, { useEffect } from "react";
import FormLabel from "@mui/material/FormLabel";
import Slider, { SliderProps } from "@mui/material/Slider";

import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputSlider = ({
  name,
  control,
  setValue,
  label,
  ...props
}: FormInputProps & SliderProps) => {
  const [sliderValue, setSliderValue] = React.useState<number>(30);

  useEffect(() => {
    if (sliderValue) setValue(name, sliderValue);
  }, [sliderValue]);

  const handleChange = (_: any, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={() => (
          <Slider
            {...props}
            value={sliderValue}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        )}
      />
    </>
  );
};
