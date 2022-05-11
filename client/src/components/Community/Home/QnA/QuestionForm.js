import React from "react";
import classes from "./QuestionForm.module.css";
import { Button } from "react-bootstrap";
const QuestionForm = () => {
  return (
    <div>
      <form>
        <textarea className={classes.inputbox}></textarea>
        <Button className={classes.button} variant="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default QuestionForm;
