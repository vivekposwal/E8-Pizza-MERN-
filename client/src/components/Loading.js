import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <Spinner
      animation="border"
      variant="info"
      style={{
        height: "80px",
        width: "80px",
        marginTop: "150px",
      }}
    />
  );
}
