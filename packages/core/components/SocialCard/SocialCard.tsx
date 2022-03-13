import React, { useState, ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import SocialImage from "../SocialImage";
import classes from "./SocialCard.module.css";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Icon from "../Icons";

import { DraggableProvidedDragHandleProps } from "react-beautiful-dnd";
import { useTranslation } from "react-i18next";

export interface SocialCardProps {
  className?: string;
  index?: number;
  id?: string;
  icon: string;
  name: string;
  readonly?: boolean;
  dragHandleProps?: DraggableProvidedDragHandleProps;
  onChange?: ({
    name,
    id,
  }: {
    name: string;
    id: string;
    index?: number;
  }) => void;
  onDelete?: ({
    name,
    id,
  }: {
    name: string;
    id: string;
    index?: number;
  }) => void;
}

const SocialCard = ({
  className,
  icon = "",
  name = "",
  id = "",
  index = -1,
  dragHandleProps,
  readonly = false,
  onChange,
  onDelete,
}: SocialCardProps) => {
  const cardRef = React.createRef<HTMLDivElement>();
  const inputRef = React.createRef<HTMLInputElement>();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement>();
  const open = Boolean(anchorEl);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(id);

  const openEdit = () => {
    setIsEdit(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
  };

  const closeEdit = () => setIsEdit(false);

  // useClickAway(cardRef, () => {
  //   console.log("CARD OUTSIDE CLICKED");
  //   closeEdit();
  // });

  // useClickAway(inputRef, () => {
  //   console.log("INPUT OUTSIDE CLICKED");
  //   closeEdit();
  // });

  const handleDelete = () => {
    closeMenuAction();
    closeEdit();
    onDelete && onDelete({ name, id, index });
  };

  const openMenuAction = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenuAction = () => {
    setAnchorEl(undefined);
  };

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleUpdateId = () => {
    let newValue = id;

    if (value !== "" && newValue !== id && newValue !== "") {
      newValue = value;
    }

    onChange &&
      onChange({
        id: newValue,
        name: name,
        index,
      });
  };

  const onBlurInput = () => {
    closeMenuAction();
    closeEdit();
    handleUpdateId();
  };

  const onKeyUpInput = (event: KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.key === "Enter" && handleUpdateId();
  };

  return (
    <Card ref={cardRef} className={className}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack direction="row" justifyContent="space-between">
            <SocialImage className={classes.icon} name={icon} />
            <Stack ml={1} direction="column">
              <Box>
                <Typography>{name}</Typography>
              </Box>
              <Box>
                {isEdit ? (
                  <TextField
                    inputRef={inputRef}
                    inputProps={{
                      className: classes.inputEdit,
                    }}
                    value={value}
                    onChange={onChangeValue}
                    onBlur={onBlurInput}
                    onKeyUp={onKeyUpInput}
                    placeholder={t("ADD_ID")}
                  />
                ) : (
                  <Typography>{value}</Typography>
                )}
              </Box>
            </Stack>
          </Stack>
          {!readonly && (
            <Box>
              <Stack direction="row" spacing={1}>
                <IconButton
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={openMenuAction}
                  aria-label="delete"
                >
                  <MoreHorizIcon />
                </IconButton>
                <IconButton aria-label="drag-n-drop" {...dragHandleProps}>
                  <Icon icon="arrows-alt" />
                </IconButton>
              </Stack>

              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenuAction}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem className={classes.menuItem} onClick={openEdit}>
                  <EditIcon />
                  {t("EDIT")}
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleDelete}>
                  <DeleteIcon />
                  {t("DELETE")}
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SocialCard;
