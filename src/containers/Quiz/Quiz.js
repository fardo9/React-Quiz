import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishQuiz from "../../components/FinishedQuiz/FinishedQuiz";
// import AnswersList from "../../components/ActiveQuiz/AnswersList/AnswersList";
import axios from 'axios'


class Quiz extends Component {
  state = {
    results: {}, // {[id]: success error
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
    quiz: [
      {
        question: 'Какого цвета небо ?',
        rightAnswerId: 2,
        id: 1,
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
        id: 2,
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

    if(this.state.answerState) {

      const key = Object.keys(this.state.answerState)[0]
      if(this.state.answerState[key] === 'success'){
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]

    const results  = this.state.results

    if(question.rightAnswerId === answerId){

      if(!results[question.id]){
        results[question.id] = 'success'
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results: results
      })

      const timeOut = window.setTimeout(() => {

        if( this.isQuizFinished() ) {
          console.log('Finished')
          this.setState({
            isFinished: true
          })

        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeOut)
      }, 1000)

    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'},
        results: results
      })

    }
  }


  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}

    })
  }

 async componentDidMount() {
    console.log('Yea, Quiz iDs=' , this.props.match.params.id)
  }

  render() {
    console.log(this.state)
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все ворпосы</h1>

          {
            this.state.isFinished
            ? <FinishQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.retryHandler}
                />
            : <ActiveQuiz
              answer={this.state.quiz[this.state.activeQuestion].answer}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          }
        </div>
      </div>
    )
  }
}


export default Quiz