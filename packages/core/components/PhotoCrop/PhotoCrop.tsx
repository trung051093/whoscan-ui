import { useState, useRef, useCallback, forwardRef, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import {
  pkg,
  MEDIA_CLASS,
  ZOOM_STEP,
  MIN_ROTATE,
  MAX_ROTATE,
  ROTATE_STEP,
  ShapeCrop,
} from "./contants";
import Cropper from "react-easy-crop";
import { readFile, resizeFile } from "../../utils/file";
import classes from "./PhotoCrop.module.css";

interface IEasyCropProps {
  src: string;
  aspect: number;
  shape: string;
  grid: boolean;
  hasZoom: boolean;
  zoomVal: number;
  rotateVal: number;
  setZoomVal: any;
  setRotateVal: any;

  minZoom: number;
  maxZoom: number;
  onComplete: any;
  cropperProps: any;
  file?: File;
}

const EasyCrop = forwardRef((props: IEasyCropProps, ref) => {
  const {
    src,
    aspect,
    shape,
    grid,

    hasZoom,
    zoomVal,
    rotateVal,
    setZoomVal,
    setRotateVal,

    minZoom,
    maxZoom,
    onComplete,

    cropperProps,
  } = props;

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [cropSize, setCropSize] = useState({ width: 0, height: 0 });

  const onCropComplete = useCallback(
    (_, croppedAreaPixels) => {
      onComplete(croppedAreaPixels);
    },
    [onComplete]
  );

  const onMediaLoaded = useCallback(
    (mediaSize) => {
      const { width, height } = mediaSize;
      const ratioWidth = height * aspect;

      if (width > ratioWidth) {
        setCropSize({ width: ratioWidth, height });
      } else {
        setCropSize({ width, height: width / aspect });
      }
    },
    [aspect]
  );

  return (
    <Cropper
      {...cropperProps}
      ref={ref}
      image={src}
      crop={crop}
      cropSize={cropSize}
      onCropChange={setCrop}
      aspect={aspect}
      cropShape={shape}
      showGrid={grid}
      zoomWithScroll={hasZoom}
      zoom={zoomVal}
      rotation={rotateVal}
      onZoomChange={setZoomVal}
      onRotationChange={setRotateVal}
      minZoom={minZoom}
      maxZoom={maxZoom}
      onCropComplete={onCropComplete}
      onMediaLoaded={onMediaLoaded}
      classes={{
        containerClassName: `${pkg}-container`,
        mediaClassName: MEDIA_CLASS,
      }}
    />
  );
});

interface PhotoCropProps {
  file?: File;
  open?: boolean;
  aspect?: number;
  shape?: ShapeCrop;
  grid?: boolean;
  quality?: number;

  zoom?: boolean;
  rotate?: boolean;
  minZoom?: number;
  maxZoom?: number;
  fillColor?: string;

  modalTitle?: string;
  modalWidth?: number | string;
  modalOk?: string;
  modalCancel?: string;

  cropperProps?: any;

  children?: any;

  handleClose?: () => void;
  handleSave?: (file: File) => void;
}

const PhotoCrop = (props: PhotoCropProps, ref: any) => {
  const {
    file,
    open = false,
    aspect = 1,
    shape = "rect",
    grid = false,
    quality = 0.4,

    zoom = true,
    rotate = true,
    minZoom = 1,
    maxZoom = 3,
    fillColor = "white",

    cropperProps,
    handleClose,
    handleSave,
  } = props;

  const { t } = useTranslation();
  const hasZoom = zoom === true;
  const hasRotate = rotate === true;

  const [src, setSrc] = useState("");
  const [zoomVal, setZoomVal] = useState(1);
  const [rotateVal, setRotateVal] = useState(0);

  const fileRef: any = useRef(file);
  const cropPixelsRef: any = useRef();

  useEffect(() => {
    if (file) {
      fileRef.current = file;
      (async () => {
        const url = (await readFile(file)) as string;
        setSrc(url);
      })();
    }
  }, [file]);
  /**
   * EasyCrop
   */
  const onComplete = useCallback((croppedAreaPixels) => {
    cropPixelsRef.current = croppedAreaPixels;
  }, []);

  /**
   * Controls
   */
  const isMinZoom = zoomVal - ZOOM_STEP < minZoom;
  const isMaxZoom = zoomVal + ZOOM_STEP > maxZoom;
  const isMinRotate = rotateVal === MIN_ROTATE;
  const isMaxRotate = rotateVal === MAX_ROTATE;

  const subZoomVal = useCallback(() => {
    if (!isMinZoom) setZoomVal(zoomVal - ZOOM_STEP);
  }, [isMinZoom, zoomVal]);

  const addZoomVal = useCallback(() => {
    if (!isMaxZoom) setZoomVal(zoomVal + ZOOM_STEP);
  }, [isMaxZoom, zoomVal]);

  const subRotateVal = useCallback(() => {
    if (!isMinRotate) setRotateVal(rotateVal - ROTATE_STEP);
  }, [isMinRotate, rotateVal]);

  const addRotateVal = useCallback(() => {
    if (!isMaxRotate) setRotateVal(rotateVal + ROTATE_STEP);
  }, [isMaxRotate, rotateVal]);

  const onClose = useCallback(() => {
    setSrc("");
    setZoomVal(1);
    setRotateVal(0);
    handleClose && handleClose();
  }, []);

  const onSave = useCallback(async () => {
    onClose();
    const naturalImg: any = document.querySelector(`.${MEDIA_CLASS}`);
    const { naturalWidth, naturalHeight } = naturalImg;
    const canvas = document.createElement("canvas");
    const ctx: any = canvas.getContext("2d");

    // create a max canvas to cover the source image after rotated
    const maxLen = Math.sqrt(
      Math.pow(naturalWidth, 2) + Math.pow(naturalHeight, 2)
    );
    canvas.width = maxLen;
    canvas.height = maxLen;

    // rotate the image
    if (hasRotate && rotateVal > 0 && rotateVal < 360) {
      const halfMax = maxLen / 2;
      ctx.translate(halfMax, halfMax);
      ctx.rotate((rotateVal * Math.PI) / 180);
      ctx.translate(-halfMax, -halfMax);
    }

    ctx.fillStyle = fillColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw the source image in the center of the max canvas
    const left = (maxLen - naturalWidth) / 2;
    const top = (maxLen - naturalHeight) / 2;
    ctx.drawImage(naturalImg, left, top);

    // shrink the max canvas to the crop area size, then align two center points
    const maxImgData = ctx.getImageData(0, 0, maxLen, maxLen);
    const { width, height, x, y } = cropPixelsRef.current;
    canvas.width = width;
    canvas.height = height;
    ctx.putImageData(maxImgData, Math.round(-left - x), Math.round(-top - y));

    // get the new image
    const { type, name } = fileRef.current;
    canvas.toBlob(
      async (blob: any) => {
        const newFile = new File([blob], name, { type });
        const fileResize = await resizeFile(newFile);
        handleSave && handleSave(fileResize);
      },
      type,
      quality
    );
  }, [hasRotate, onClose, quality, rotateVal, fillColor]);

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {t("EDIT_IMAGE")}
          </Typography>
          <Button autoFocus color="inherit" onClick={onSave}>
            {t("SAVE")}
          </Button>
        </Toolbar>
      </AppBar>
      <Stack direction="row">
        {hasZoom && (
          <>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              flex={1}
            >
              <IconButton onClick={subZoomVal} disabled={isMinZoom}>
                <RemoveIcon />
              </IconButton>
              <Slider
                min={minZoom}
                max={maxZoom}
                step={ZOOM_STEP}
                value={zoomVal}
                onChange={(_: any, value: number | number[]) =>
                  setZoomVal(value as number)
                }
              />
              <IconButton onClick={addZoomVal} disabled={isMaxZoom}>
                <AddIcon />
              </IconButton>
            </Stack>
          </>
        )}
        {hasRotate && (
          <>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              flex={1}
            >
              <IconButton onClick={subRotateVal} disabled={isMinRotate}>
                <UndoIcon />
              </IconButton>
              <Slider
                min={MIN_ROTATE}
                max={MAX_ROTATE}
                step={ROTATE_STEP}
                value={rotateVal}
                onChange={(_, value: number | number[]) =>
                  setRotateVal(value as number)
                }
              />
              <IconButton onClick={addRotateVal} disabled={isMaxRotate}>
                <RedoIcon />
              </IconButton>
            </Stack>
          </>
        )}
      </Stack>
      <Box className={classes.cropContainer}>
        <EasyCrop
          ref={ref}
          src={src}
          aspect={aspect}
          shape={shape}
          grid={grid}
          hasZoom={hasZoom}
          zoomVal={zoomVal}
          rotateVal={rotateVal}
          setZoomVal={setZoomVal}
          setRotateVal={setRotateVal}
          minZoom={minZoom}
          maxZoom={maxZoom}
          onComplete={onComplete}
          cropperProps={cropperProps}
        />
      </Box>
    </Dialog>
  );
};

export default forwardRef(PhotoCrop);
