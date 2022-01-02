import React from "react";
import { DEFAULT_BASE_URL } from "./constants";

export interface SocialImageProps
  extends React.HTMLAttributes<HTMLImageElement> {
  baseUrl?: string;
  name: string;
}

export const SocialImage: React.FC<SocialImageProps> = ({
  baseUrl = DEFAULT_BASE_URL,
  name,
  ...props
}) => {
  return (
    <React.Fragment>
      <img {...props} src={baseUrl.replace("{ICON}", name)} alt={name} />
    </React.Fragment>
  );
};

export default React.memo(SocialImage);
