import React from "react";
import classes from "./StockInfo.module.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const StockInfo = (props) => {

  const submitHandler = (event)=>{
    event.preventDefault();
  }

  return (
    <div className={classes.box}>
      <span className={classes.topofsymbol}>
        <span className={classes.quantity}>Qty {props.quantity} :- </span>
        <span className={classes.avg}>Avg <FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon> {props.buyPrice}</span>
      </span>
      <h3>{props.symbol}</h3>
      <span className={classes.invested}>
        Invested : <FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon> {props.buyPrice * props.quantity}
      </span>
      <span className={classes.current}>
        Current : <FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon> {props.buyPrice * props.quantity}
      </span>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          type="number"
          min={1}
          defaultValue={1}
          className={classes.number}
        ></input>
        <Button type="submit" className={classes.sell} variant="danger">
          Sell
        </Button>
      </form>
    </div>
  );
};

export default StockInfo;
