import React from "react";
import classes from "./investedCurrent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const InvestCurrentBox = (props) => {
  return (
    <div className={classes.box}>
      <h3>{props.title}</h3>
      <p><FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon> {props.total}</p>
    </div>
  );
};

export default InvestCurrentBox;
