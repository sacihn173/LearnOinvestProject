import React from "react";
import { Container } from "react-bootstrap";
import classes from "./BearBull.module.css";

const NseBse = () => {
  return (
    <>
      <Container>
        <h1>Bear v/s Bull</h1>
        <div className={classes.mainCont}>
          <div className={classes.section}>
            <div className={classes.image}>
              <img src={require("../../pictures/1.jpg")} alt="nse" />
            </div>
            <p>
              A bull market is a market that is on the rise and where the
              conditions of the economy are generally favorable.
            </p>
            <p>
              A bear market exists in an economy that is receding and where most
              stocks are declining in value.
            </p>
            <div className={classes.image}>
              <img src={require("../../pictures/2.png")} alt="nse" />
            </div>
          </div>

          <div className={classes.section}>
            <h1>Characteristics of Bull and Bear Markets</h1>
            <p>
              Although a bull market or a bear market condition is marked by the
              direction of stock prices, there are some accompanying
              characteristics that investors should be aware of.
            </p>
            <h2>Supply and Demand for Securities-</h2>
            <p>
              In a bull market, there is strong demand and weak supply for
              securities. In other words, many investors wish to buy securities
              but few are willing to sell them. As a result, share prices will
              rise as investors compete to obtain available equity.{" "}
            </p>
            <div className={classes.image}>
              <img src={require("../../pictures/3.png")} alt="nse" />
            </div>
            <p>
              In a bear market, the opposite is true: more people are looking to
              sell than buy. The demand is significantly lower than supply and,
              as a result, share prices drop.
            </p>
            <h2>Investor Psychology-</h2>
            <p>
              Because the market's behavior is impacted and determined by how
              individuals perceive and react to its behavior, investor
              psychology and sentiment affect whether the market will rise or
              fall. Stock market performance and investor psychology are
              mutually dependent. In a bull market, investors willingly
              participate in the hope of obtaining a profit.{" "}
            </p>
            <div className={classes.image}>
              <img src={require("../../pictures/4.png")} alt="nse" />
            </div>
            <h2>Change in Economic Activity-</h2>
            <p>
              Because the businesses whose stocks are trading on the exchanges
              are participants in the greater economy, the stock market and the
              economy are strongly linked.{" "}
            </p>
            <div className={classes.image}>
              <img src={require("../../pictures/5.png")} alt="nse" />
            </div>
            <p>
              A bear market is associated with a weak economy. Most businesses
              are unable to record huge profits because consumers are not
              spending nearly enough. This decline in profits directly affects
              the way the market values stocks.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NseBse;
