import React, { useEffect, useState } from "react";
import classes from "./List.module.css";
import api from "../../config/api";
import ModalCustom from "../Modal/ModalCustom";
import Loading from "../UI/Loading";

const List = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [symbol, setSymbol] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // "https://c883b05e-97a0-4b43-92f6-a3c0276c5f4e.mock.pstmn.io/search"; `/${props.type}`
    const data = async () => {
      try {
        const response = await api.get(
          `https://f97aec65-2ae6-41d9-9ddb-9d4a0f5082f3.mock.pstmn.io/${props.type}`
        );
        setData(response.data.body.allSec.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    data();

    return () => {
      setLoading(true);
    };
  }, []);

  const makeList = (element, index) => {
    return (
      <li key={index} id={element.symbol} onClick={handleClick}>
        {element.symbol}
        <span
          className={classes.percent}
          style={
            props.type === "topgain" ? { color: "green" } : { color: "red" }
          }
        >
          {element.perChange}%
        </span>
      </li>
    );
  };

  const handleClick = (event) => {
    setSymbol(event.target.id);
    handleShow();
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
        <h1>{props.type === "topgain" ? "Top Gainer" : "Top Losers"}</h1>
        {loading || !data ? (
          <Loading />
        ) : (
          <ul>{data.slice(0, 7).map(makeList)}</ul>
        )}
      </div>
    </>
  );
};

export default List;
