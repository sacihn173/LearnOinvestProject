import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InvestCurrentBox from "../StockPortfolio/InvestCurrentBox";
import StockInfo from "../StockPortfolio/StockInfo";
import { Row, Col } from "react-bootstrap";
import classes from "./Portfolio.module.css";
import Loading from "../UI/Loading";
import api from "../../config/api";

const Portfolio = () => {
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    const getData = async()=>{
      const response = await api.get("/portfolio");
      dispatch({
        type: "GOT_PORTFOLIO_DATA",
        payload: { data: response.data },
      });
      setLoading(false);
    }
    getData();
    
  },[])
  
  const balance = useSelector((state) => {
    return state.balance;
  });
 
  const portfolio = useSelector((state) => {
    return state.portfolio;
  });
  return (
    <>
    {loading ? <Loading/> : <div style={{ width: "50%", margin: "0 auto", position: "relative" }}>
    <div className={classes.top}>
      <Row>
        <Col className={classes.col}>
          <InvestCurrentBox
            title={"Invested"}
            total={balance[0].invested}
          ></InvestCurrentBox>
        </Col>
        <Col>
          <InvestCurrentBox
            title={"Current"}
            total={balance[0].invested}
          ></InvestCurrentBox>
        </Col>
      </Row>
    </div>
    {portfolio.map((element) => {
      return (
        <StockInfo
          symbol={element.stock_name}
          quantity={element.quantity}
          buyPrice={element.buy_price}
        />
      );
    })}
  </div>}
  </>
  );
};

export default Portfolio;
