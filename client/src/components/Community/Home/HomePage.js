import React from "react";
import Question from "./QnA/Question";
import classes from "./HomePage.module.css";
import QuestionForm from "./QnA/QuestionForm";

const HomePage = () => {
  return (
    <>
      <div className={classes.holder}>
        <h1>Discussion</h1>
        <h3>Ask Question</h3>
        <QuestionForm />
        <Question
          name={"Ayush Gupta"}
          comment={
            "hey guys, i need an indicator that shows gaps on 1min bars. if filled the lines are greyed out and if not they are bold. can anyone help?"
          }
        />
        <Question
          name={"Kartikey Sood"}
          comment={
            "if u would have listened to this advice previously i wouldnt be blowing my account several times .. i failed over and over again in my trading career"
          }
        />
        <Question
          name={"Sachin Poonia"}
          comment={
            "even if u have a very high probability trade in front of y .. dont think about money and hiw much u can make .. always thi nk that this might be a losing trade .. how much ull be okay with to lose .. give space for your trade to move .. 100 pips .. best of luck my dear"
          }
        />
        <Question
          name={"Aman Singh"}
          comment={
            "technicals : try identifying channels , trends, and use pivot points daily . But most important thing is not that .. the key to success is risk management and risking very very small percrntage a day s"
          }
        />
        <Question
          name={"Anushka Sharma"}
          comment={
            "thanks just started, its a lot to learn! oh shit.... i hope its not a lot. im learning naked charting to start but could use a little help with better entries and exits"
          }
        />
        <Question
          name={"Shalini"}
          comment={
            "Like Bingo. Out of the 10 they spit, one wins and they bring it up to get their back patted. Then week end comes, and their accounts are red.CAD superb,"
          }
        />
        <Question
          name={"Gauri"}
          comment={
            "hey guys, i need an indicator that shows gaps on 1min bars. if filled the lines are greyed out and if not they are bold. can anyone help?"
          }
        />
        <Question
          name={"Dhampal Chopra"}
          comment={"not holding anything over the weekend"}
        />
      </div>
    </>
  );
};

export default HomePage;
