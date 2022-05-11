import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import classes from "./CardCustom.module.css";
const CardCustom = (props) => {
  return (
    <Card className={classes.card} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.summary}</Card.Text>
        <Button className={classes.readmore} variant="primary">
          {props.btnText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardCustom;
