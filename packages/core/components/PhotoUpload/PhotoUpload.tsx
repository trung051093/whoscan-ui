import React, { useState } from "react";
import classNames from "classnames";
import { PhotoUploadType } from "./constants";
import UploadButton, { UploadButtonProps } from "../UploadButton/UploadButton";
import Avatar from "@mui/material/Avatar";
import classes from "./PhotoUpload.module.css";
import ImagePlaceHolder from "../../assets/image/placeholder.jpeg";
import { ShapeCrop } from "../PhotoCrop/contants";

export interface PhotoUploadProps extends UploadButtonProps {
  btnClassName?: string;
  imgClassName?: string;
  className?: string;
  type?: PhotoUploadType;
  btnLabel?: string;
  alt?: string;
  src?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  cropBeforeUpload?: boolean;
}

const PhotoUpload = ({
  id = "upload-image",
  className,
  btnClassName,
  imgClassName,
  btnLabel,
  type = PhotoUploadType.Rectangle,
  width = 56,
  height = 56,
  alt = "photo",
  src = "",
  placeholder = "",
  cropBeforeUpload = false,
  onUploadSuccess,
  onUploadFail,
  onUploadProgress,
}: PhotoUploadProps) => {
  const [photoUpload, setPhotoUpload] = useState<string | undefined>(
    src || placeholder
  );
  const isCircle = Boolean(type === PhotoUploadType.Circle);

  const onUploadSuccessPhoto = (data: any) => {
    console.log(
      "🚀 ~ file: PhotoUpload.tsx ~ line 49 ~ onUploadSuccess ~ data",
      data
    );
    setPhotoUpload(data.url);
    onUploadSuccess && onUploadSuccess(data);
  };

  const onUploadFailPhoto = (error: Error) => {
    setPhotoUpload(undefined);
    onUploadFail && onUploadFail(error);
  };

  return (
    <React.Fragment>
      <div
        className={classNames(classes.photoContainer, className)}
        style={{ width: width, height: height }}
      >
        {isCircle ? (
          <Avatar
            alt={alt}
            src={photoUpload}
            sx={{ width: width, height: height }}
            className={classNames(classes.photo, imgClassName)}
          />
        ) : (
          <img
            src={photoUpload || ImagePlaceHolder}
            className={classNames(classes.photo, imgClassName)}
            alt={alt}
            style={{ width: width, height: height }}
          />
        )}
        <div
          className={classNames(classes.uploadWrapper, {
            [classes.uploadWrapperCircle]: isCircle,
          })}
        >
          <UploadButton
            id={id}
            label={btnLabel}
            showIcon
            rounded={isCircle}
            cropBeforeUpload={cropBeforeUpload}
            aspectCrop={width / height}
            cropShape={
              Boolean(isCircle) ? ShapeCrop.Circle : ShapeCrop.Rectangle
            }
            className={classNames(classes.btn, btnClassName)}
            onUploadSuccess={onUploadSuccessPhoto}
            onUploadFail={onUploadFailPhoto}
            onUploadProgress={onUploadProgress}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PhotoUpload;
