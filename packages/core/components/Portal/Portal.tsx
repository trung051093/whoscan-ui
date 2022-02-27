import React, { ReactElement } from "react";
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// create portal
const portal: HTMLElement = document.createElement("div");
portal.classList.add("my-super-cool-component-portal");
if (!document.body) {
  throw new Error("body not ready for portal creation!");
}
document.body.appendChild(portal);

interface PortalProps {
  enableDropComponent?: boolean;
  className?: string;
  single?: boolean;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  children: ReactElement;
}

const Portal = ({
  provided,
  snapshot,
  className = "portal",
  enableDropComponent = false,
  children,
  single,
}: PortalProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const usePortal: boolean = snapshot.isDragging;

  const itemWrapperClassname = classNames({
    [`${className}__item`]: true,
    [`${className}__item--dragging`]: snapshot.isDragging,
    [`${className}__single`]: single,
  });

  const propsComponentDragable = enableDropComponent
    ? provided.dragHandleProps
    : {};

  const child: JSX.Element = (
    <div
      style={provided.draggableProps.style}
      className={itemWrapperClassname}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...propsComponentDragable}
    >
      {children}
    </div>
  );

  if (!usePortal || isMobile) {
    return child;
  }

  // if dragging - put the item in a portal
  ReactDOM.createPortal(child, portal);
  return <React.Fragment></React.Fragment>;
};

export default React.memo(Portal);
