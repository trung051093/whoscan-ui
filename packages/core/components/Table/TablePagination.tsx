import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface CustomTablePaginationProps {
  total: number;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
  rowsPerPageText?: string;
  onChangePage: (page: number) => void;
  onChangeRowsPerPage: (rowPerPage: number) => void;
}

export function CustomTablePagination({
  total,
  page,
  rowsPerPage,
  rowsPerPageOptions = [10, 20, 50, 100, 1000],
  rowsPerPageText = "Rows per page",
  onChangePage,
  onChangeRowsPerPage,
}: CustomTablePaginationProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const totalCount = React.useMemo(
    () => Math.round(total / rowsPerPage),
    [total, rowsPerPage]
  );

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" alignItems="center">
        <Typography>{rowsPerPageText}</Typography>
        <Button
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          endIcon={<KeyboardArrowDownIcon />}
          onClick={handleClick}
        >
          {rowsPerPage}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {rowsPerPageOptions.map((number: number) => (
            <MenuItem
              key={`row-per-page-${number}`}
              onClick={() => {
                onChangeRowsPerPage(number);
                handleClose();
              }}
            >
              {number}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
      <Pagination
        count={totalCount}
        page={page}
        onChange={(_, page) => onChangePage(page)}
      />
    </Stack>
  );
}
