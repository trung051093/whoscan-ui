import Link, { LinkProps } from "@mui/material/Link";
import { TypographyPresets, presets } from "./Preset";
import classNames from "classnames";

interface TitleProps extends LinkProps {
  preset?: TypographyPresets;
  className?: string;
}

export const Title = (props: TitleProps) => {
  const { preset, className, ...rest } = props;
  const namePreset = preset && presets[preset];
  return (
    <Link
      className={classNames("text", "title", namePreset, className)}
      {...rest}
    />
  );
};
