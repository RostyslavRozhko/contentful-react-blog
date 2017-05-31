import React from "react";
import CircularProgress from "material-ui/CircularProgress";

const Loading = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <CircularProgress />
  </div>
);

export default Loading;
