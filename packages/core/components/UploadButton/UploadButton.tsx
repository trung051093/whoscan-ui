import React, { useState } from "react";
import { useMutation } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import PhotoCropDialog from "../PhotoCrop";
import {
  DEFAULT_HEADER,
  DEFAULT_ACCEPT,
  DEFAULT_FIELD_NAME,
  TEST_URL,
} from "./constants";

import classes from "./UploadButton.module.css";
import ErrorIcon from "@mui/icons-material/Error";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DoneIcon from "@mui/icons-material/Done";
import classNames from "classnames";
import { DEFAULT_CROP_ASPECT, ShapeCrop } from "../PhotoCrop/contants";

export interface UploadButtonProps {
  id: string;
  showIcon?: boolean;
  label?: string;
  accept?: string;
  presignedUploadUrl?: string;
  headers?: Record<string, string>;
  field?: string;
  className?: string;
  width?: number;
  height?: number;
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  cropBeforeUpload?: boolean;
  aspectCrop?: number;
  cropShape?: ShapeCrop;
  onUploadFail?: (error: any) => void;
  onUploadSuccess?: (data: any) => void;
  onUploadProgress?: (progress: number) => void;
}
const UploadButton = ({
  id,
  label,
  showIcon = true,
  headers = DEFAULT_HEADER,
  accept = DEFAULT_ACCEPT,
  field = DEFAULT_FIELD_NAME,
  presignedUploadUrl = TEST_URL,
  className,
  width,
  height,
  size,
  rounded,
  cropBeforeUpload,
  aspectCrop = DEFAULT_CROP_ASPECT,
  cropShape = ShapeCrop.Rectangle,
  onUploadSuccess,
  onUploadFail,
  onUploadProgress,
}: UploadButtonProps) => {
  const [openCrop, setOpenCrop] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File>();

  const inputRef = React.createRef<HTMLInputElement>();

  const mutateFile = useMutation<AxiosResponse, AxiosError, File>(
    (file) => {
      const payload = new FormData();
      payload.append(field, file);
      return axios.post(presignedUploadUrl || TEST_URL, payload, {
        headers: headers,
        onUploadProgress: (ev) => {
          const progress = Math.round((ev.loaded * 100) / ev.total);
          onUploadProgress && onUploadProgress(progress);
        },
      });
    },
    {
      onSuccess: (response) =>
        onUploadSuccess && onUploadSuccess(response.data),
      onError: (error) => onUploadFail && onUploadFail(error),
    }
  );

  const openCropDialog = () => {
    setOpenCrop(true);
  };

  const closeCropDialog = () => {
    setOpenCrop(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as File;
    if (cropBeforeUpload) {
      setSelectedFile(file);
      openCropDialog();
      return;
    }
    mutateFile.mutate(file);
  };

  const handleBtnUploadClick = () => {
    inputRef.current?.click();
  };

  const handleCropCompleted = (file: File) => {
    mutateFile.mutate(file);
  };

  return (
    <Box className={classes.btnContainer}>
      {cropBeforeUpload && (
        <PhotoCropDialog
          file={selectedFile}
          open={openCrop}
          aspect={aspectCrop}
          shape={cropShape}
          handleClose={closeCropDialog}
          handleSave={handleCropCompleted}
        />
      )}
      <input
        ref={inputRef}
        className={classes.inputFile}
        accept={accept}
        id={id}
        type="file"
        onChange={handleFileInputChange}
      />
      <LoadingButton
        className={classNames(classes.btn, className, {
          [classes.btnRounded]: rounded,
        })}
        size={size}
        aria-label="upload"
        onClick={handleBtnUploadClick}
        variant="contained"
        style={{
          width: width,
          height: height,
        }}
        loading={mutateFile.isLoading}
      >
        {showIcon && (
          <React.Fragment>
            {mutateFile.isSuccess && <DoneIcon />}
            {mutateFile.isError && <ErrorIcon />}
            {(mutateFile.isLoading || mutateFile.isIdle) && <PhotoCamera />}
          </React.Fragment>
        )}
        {label && <Typography className={classes.btnLabel}>{label}</Typography>}
      </LoadingButton>
    </Box>
  );
};

export default UploadButton;
