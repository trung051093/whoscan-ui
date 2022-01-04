export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
}

export interface FormInputDropDownProps extends FormInputProps {
  options: { label: string; value: any }[];
}


export interface FormInputMultiCheckboxProps extends FormInputProps {
  options: { label: string; value: any }[];
}

export interface FormInputRatioProps extends FormInputProps {
  options: { label: string; value: any }[];
}