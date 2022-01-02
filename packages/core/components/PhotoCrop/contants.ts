const pkg = 'whosca-img-crop';
const MEDIA_CLASS = `${pkg}-media`;
const ZOOM_STEP = 0.1;
const MIN_ROTATE = 0;
const MAX_ROTATE = 360;
const ROTATE_STEP = 1;
const DEFAULT_CROP_ASPECT = 1;
enum ShapeCrop {
    Rectangle = "react",
    Circle = "round"
}

export { pkg, DEFAULT_CROP_ASPECT, MEDIA_CLASS, ZOOM_STEP, MIN_ROTATE, MAX_ROTATE, ROTATE_STEP, ShapeCrop }