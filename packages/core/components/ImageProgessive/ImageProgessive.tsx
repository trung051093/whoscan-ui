import classNames from "classnames";
import { useIntersection } from "react-use";
import React, { useState, useEffect } from "react";

interface ImageProgessiveProps {
  src: string;
  className?: string;
  imageClassName?: string;
  imageThumbClassName?: string;
  shape?: "square" | "circle";
  width: number;
  height: number;
  borderRadius?: number;
  ratio?: number;
  threshold?: number | number[];
  onClick?: () => void;
  style?: any;
}

const ImageProgessive: React.FC<ImageProgessiveProps> = ({
  ratio = 0.99,
  threshold = 1,
  className,
  imageClassName,
  imageThumbClassName,
  borderRadius,
  src,
  width,
  height,
  shape = "square",
  onClick = () => {},
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  });

  useEffect(() => {
    if (intersection && intersection?.intersectionRatio > ratio) {
      setIsInView(true);
    }
    return () => {};
  }, [intersection, ratio]);

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  return (
    <React.Fragment>
      <div
        onClick={onClick}
        ref={intersectionRef}
        className={classNames("image-skeleton", className, {
          "image-skeleton__square": shape === "square",
          "image-skeleton__circle": shape === "circle",
        })}
        style={
          style || {
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `${borderRadius}px`,
          }
        }
      >
        {isInView && (
          <React.Fragment>
            <img
              className={classNames(
                "image-skeleton__image",
                "thumb",
                imageThumbClassName,
                {
                  isLoaded: !!isLoaded,
                }
              )}
              src={src}
              alt="komi"
            />
            <img
              className={classNames(
                "image-skeleton__image",
                "original",
                imageClassName,
                {
                  isLoaded: !!isLoaded,
                }
              )}
              src={src}
              onLoad={handleOnLoad}
              alt="komi"
            />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default ImageProgessive;
