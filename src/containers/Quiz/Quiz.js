import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
// import AnswersList from "../../components/ActiveQuiz/AnswersList/AnswersList";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
    quiz: [
      {
        question: 'Какого цвета небо ?',
        rightAnswerId: 2,
        answer: [
          {text: 'Черный', id: 1},
          {text: 'Синий', id: 2},
          {text: 'Белый', id: 3},
          {text: 'Голубой', id: 4},

        ]
      },
      {
        question: 'Марка немецкого автомобиля ?',
        rightAnswerId: 1,
        answer: [
          {text: 'BMW', id: 1},
          {text: 'Citroen', id: 2},
          {text: 'Jeep', id: 3},
          {text: 'Dodge', id: 4},

        ]
      }
    ]
  }

  onAnswerClickHandler  = (answerId) => {
    console.log('AnswerId: ', answerId)

    const question = this.state.quiz[this.state.activeQuestion]

    if(question.rightAnswerId === answerId){

      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeOut = window.setTimeout(() => {

        if(this.isQuizFinished()){
          console.log('Finished')

        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeOut)
      }, 1000)
    } else {

      this.setState({
        answerState: {[answerId]: 'error'}
      })

    }
  }


  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }



  render() {
    console.log(this.state)
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все ворпосы</h1>

          <ActiveQuiz
            answer={this.state.quiz[this.state.activeQuestion].answer}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}


export default Quiz