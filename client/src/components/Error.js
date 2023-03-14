import React from "react";
import { Alert } from "react-bootstrap";
const Error = ({ error }) => {
  return (
    <Alert
      style={{ margin: "auto", width: "50%" }}
      className="text-center"
      variant="danger"
    >
      {error}
    </Alert>
  );
};

export default Error;
