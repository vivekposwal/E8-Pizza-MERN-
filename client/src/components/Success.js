import React from "react";
import { Alert } from "react-bootstrap";
const Success = ({ success }) => {
  return (
    <Alert
      style={{ margin: "auto", width: "50%" }}
      className="text-center"
      variant="success"
    >
      {success}
    </Alert>
  );
};

export default Success;
