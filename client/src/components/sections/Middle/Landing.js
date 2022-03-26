import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import List from "../../List/List";
import Box from "../../Box/Box";
import classes from "./middle.module.css";

const Landing = () => {
  return (
    <div className={classes.middle}>
      <Container>
        <Row>
          <Col lg>
            <List type={"topgain"}></List>
          </Col>
          <Col lg>
            <List type={"toploss"}></List>
          </Col>
          <Col lg>
            <Box type={"nifty50"}></Box>
            <Box type={"niftybnk"}></Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
