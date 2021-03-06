import TableHead, { TableHeadProps } from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import noop from "lodash/noop";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DroppableStateSnapshot,
  Direction,
  DroppableMode,
} from "react-beautiful-dnd";
import { ArrayServices } from "../../utils/array";
import { TableColumn } from ".";

export interface CustomTableHeadProps extends TableHeadProps {
  columns: TableColumn[];
  numSelected?: number;
  rowCount?: number;
  showSelection?: boolean;
  primaryKey?: string;
  onSelectAll?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // for drag and drop
  isDnD?: boolean;
  internalScroll?: boolean;
  droppableId?: string;
  direction?: Direction;
  mode?: DroppableMode;
  itemIdPrefix?: string;
  onReorderColumn: (columns: TableColumn[]) => void;
}

export function CustomTableHead({
  columns = [],
  numSelected = 0,
  rowCount = 0,
  showSelection = false,
  onSelectAll = noop,
  onReorderColumn = noop,
}: CustomTableHeadProps) {
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newColumns = ArrayServices.reorder(
      columns,
      result.source.index,
      destination.index
    );

    onReorderColumn(newColumns);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TableHead>
        <Droppable droppableId="droppableTable" direction="horizontal">
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <TableRow
              key={snapshot.toString()}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
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

              {columns.map((column, index) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <Draggable
                    key={column.id}
                    draggableId={column.id}
                    index={index}
                  >
                    {(provided) => (
                      <Typography
                        component="span"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {column.label}
                      </Typography>
                    )}
                  </Draggable>
                </TableCell>
              ))}
              {provided.placeholder}
            </TableRow>
          )}
        </Droppable>
      </TableHead>
    </DragDropContext>
  );
}
