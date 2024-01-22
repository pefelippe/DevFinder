import { CircularProgress } from "@mui/material";
import React from "react";

function LoadingCard() {
  return (
    <div className="mx-auto  min-h-[384px]" data-testid="loading-indicator">
      <CircularProgress />
    </div>
  );
}

export default LoadingCard;
