import React from 'react'
import classes from './AnswerItem.css'

const AnswerItem = (props) => {
    // console.log(props)

    const cls = [
        classes.AnswerItem
    ]
    if (props.state) {
        cls.push(classes[props.state])
    }

    return (
        <li
            className={cls.join(' ')} id={props.answer.id}
            onClick={ ()=> props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text }
        </li>
    )
}

export default AnswerItem
