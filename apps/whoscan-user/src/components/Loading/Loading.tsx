import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="position-absolute-center index-100">
      <CircularProgress />
    </div>
  );
};

export default Loading;
