import React, { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./List.module.css";
import ModalCustom from "../Modal/ModalCustom";

const SearchList = () => {
  const searchData = useSelector((state) => state.searchData);
  const [show, setShow] = useState(false);
  const [symbol, setSymbol] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (event) => {
    setSymbol(event.target.id);
    handleShow();
  };

  const makeList = (element, index) => {
    return (
      <li key={index} id={element.symbol} onClick={handleClick}>
        {element.symbol}
        <span className={classes.info}>{element.symbol_info}</span>
      </li>
    );
  };
  return (
    <>
      {show && (
        <ModalCustom
          show={show}
          title={symbol}
          handleClose={handleClose}
          handleShow={handleShow}
        ></ModalCustom>
      )}
      <div className={classes.listContainer}>
        <ul>{searchData.map(makeList)}</ul>
      </div>
    </>
  );
};

export default SearchList;
