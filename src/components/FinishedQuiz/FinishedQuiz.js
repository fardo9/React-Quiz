import React from 'react'
import classes from './FinishQuiz.css'
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const FinishQuiz = props => {
    const successCount = Object.keys(props.results).reduce( (total, key) => {
        if(props.results[key] === 'success'){
            total++
        }
        return total
    }, 0)

    return (
        <div className={classes.FinishQuiz}>
            {/*<h1>Результаты опросника:</h1>*/}
            <ul>
                {
                    props.quiz.map( (quizItem, index) => {
                        const cls = [
                            'fas',
                            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            classes[props.results[quizItem.id]]
                        ]
                        return(
                            <li
                                key={index}
                            >
                                <strong>{ index + 1 }</strong>. &nbsp;
                                { quizItem.question }
                                <i className={ cls.join( ' ' ) } />
                            </li>
                        )
                    } )
                }
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Link to='/'>
                    <Button  type="success">Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishQuiz