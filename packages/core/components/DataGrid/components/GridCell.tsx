import { useGridComponentProps } from "../hooks";
import { BaseDivComponentProps } from "../models";
import classNames from "classnames";

interface GridCellProps extends BaseDivComponentProps {
  children: any;
}

export const GridCellComponent = ({
  children,
  ...otherProps
}: GridCellProps) => {
  const componentProps = useGridComponentProps("Cell");
  return (
    <div
      {...componentProps}
      {...otherProps}
      className={classNames(componentProps.className, otherProps.className)}
    >
      {children}
    </div>
  );
};

GridCellComponent.displayName = "GridCell";
