import React from 'react'
import classes from './ActiveQuiz.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
              <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                  Как дела?
              </span>

                <small>{props.answerNumber} из {props.quizLength}</small>
            </p>

            <AnswersList
                state={props.state}
                answers={props.answer}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )

}

export default ActiveQuiz