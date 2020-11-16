import React, {Component} from 'react'
import classes from './Auth.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректний email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }

            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректний пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }


    loginHandler = () => {

    }
    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName} :` , event.target.value)
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map( (controlName, index) => {
            const control = this.state.formControls[controlName]
            return(
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return(
            <div className={classes.Auth}>
                <div>
                <h1>Авторизация</h1>

                <form action="" onSubmit={this.submitHandler} className={classes.AuthForm}>
                    {/*<Input*/}
                    {/*    label="Email" />*/}
                    {/*<Input*/}
                    {/*    label="Пароль"*/}
                    {/*    errorMessage={'NRdasd'}*/}
                    {/*/>*/}
                    {this.renderInputs()}
                    <Button
                        type="success"
                        onClick={this.loginHandler}
                    >
                        Войти
                    </Button>
                    <Button
                        type="primary"
                        onClick={this.registerHandler}
                    >
                        Зарегистрироваться
                    </Button>
                </form>
                </div>
            </div>
        )
    }
}