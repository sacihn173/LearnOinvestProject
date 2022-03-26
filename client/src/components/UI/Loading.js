import React from "react";
import classes from "./Loading.module.css";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className={classes.loading}>
      <Spinner animation="border" />
    </div>
  );
};

export default Loading;
