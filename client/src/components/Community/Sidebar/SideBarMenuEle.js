import React from "react";
import classes from "./Element.module.css";
import { Link } from "react-router-dom";

const SideBarMenuEle = (props) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`${props.path}`}>
      <div className={classes.element}>
        <h4>{props.name}</h4>
      </div>
    </Link>
  );
};

export default SideBarMenuEle;
