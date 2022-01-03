import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg--dark2">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CircularProgress />
      </div>
    </div>
  );
};

export default Loading;
