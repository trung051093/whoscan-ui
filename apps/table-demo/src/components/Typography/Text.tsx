import Typography, { TypographyProps } from "@mui/material/Typography";
import { TypographyPresets, presets } from "./Preset";
import classNames from "classnames";

export interface TextProps extends TypographyProps {
  preset?: TypographyPresets;
  className?: string;
}

export const Text = (props: TextProps) => {
  const { preset, className, ...rest } = props;
  const namePreset = preset && presets[preset];
  return (
    <Typography
      className={classNames("text", namePreset, className)}
      {...rest}
    />
  );
};
