import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

const Icon: React.FC<FontAwesomeIconProps> = (props: FontAwesomeIconProps) => {
  return (
    <React.Fragment>
      <FontAwesomeIcon {...props} />
    </React.Fragment>
  );
};

export default Icon;
