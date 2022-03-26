import classes from "./Question.module.css";

import React from "react";

const Question = (props) => {
  return (
    <div className={classes.ques}>
      <header>
        <h3>Posted by :- {props.name}</h3>
      </header>
      <div className={classes.body}>
        <p>
          {props.comment}
        </p>
      </div>
    </div>
  );
};

export default Question;
