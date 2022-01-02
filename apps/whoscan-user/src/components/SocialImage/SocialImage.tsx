import classNames from 'classnames';
import React from 'react';

interface SocialImageProps {
  className?: string;
  name: string;
}

export const SocialImage: React.FC<SocialImageProps> = ({
  name,
  className,
}) => {
  const imgClass = classNames({
    [className || '']: true,
  });
  return (
    <React.Fragment>
      <img
        className={imgClass}
        src={process.env.REACT_APP_ICON_BASE_URL?.replace('{ICON}', name)}
        alt={name}
      />
    </React.Fragment>
  );
};

export default React.memo(SocialImage);
