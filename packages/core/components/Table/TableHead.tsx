import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import { CustomTableHeadProps } from "./Table.model";
import DragDropContext from "../DragDropContext";
import Portal from "../Portal";
import noop from "lodash/noop";

export default function CustomTableHead({
  columns = [],
  numSelected = 0,
  rowCount = 0,
  showSelection = false,
  onSelectAll = noop,
  onReorderColumn = noop,
}: CustomTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        {showSelection && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAll}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
        )}
        <DragDropContext
          list={columns}
          itemIdPrefix="head"
          droppableId="droppableId"
          direction="horizontal"
          onDropEndCallback={onReorderColumn}
        >
          {(dragProvided, snapshot, column, headIndex) => {
            return (
              <Portal
                key={headIndex}
                className="header-drag-and-drop"
                provided={dragProvided}
                snapshot={snapshot}
                single={columns?.length === 1}
              >
                <>
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                </>
              </Portal>
            );
          }}
        </DragDropContext>
      </TableRow>
    </TableHead>
  );
}
