import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import validator from 'validator'
import mainApi from '../../utils/MainApi'
import logo from '../../images/header/header_logo.svg';

export default function Login(props) {
    const [isValidForm, setIsValidForm] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isValidPassword, setIsValidPassword] = useState(false)
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [errorCode, setErrorCode] = useState('')

    function handleChangeForm(evt) {
        if (evt.target.name === 'login-input-email') {
            setIsValidEmail(validator.isEmail(evt.target.value))
            setInputEmail(evt.target.value)
        } else if (evt.target.name === 'login-input-password') {
            setIsValidPassword(evt.target.value.length >= 3)
            setInputPassword(evt.target.value)
        }
    }

    function handleSubmitForm(evt) {
        evt.preventDefault()
        setErrorCode('')
        mainApi.login({
            email: inputEmail,
            password: inputPassword,
        })
            .then(res => {
                props.updateCurrentUser(res)
            })
            .catch((err) => {
                setErrorCode(`Произошла ошибка: ${err.statusText + ' ' + err.status}`)
            })
    }

    useEffect(()=>{
        if (isValidEmail && isValidPassword) {
            setIsValidForm(true)
        } else {
            setIsValidForm(false)
        }
    },[isValidEmail, isValidPassword, isValidForm])

    return (
        props.isLoggedIn
            ? <Navigate replace to="/movies" />
            : <section className="login">
            <div className="login__container">
                <Link to="/">
                    <img className="login__login-logo" src={logo} alt="Login logo" />
                </Link>
                <h2 className="login__title">Рады видеть!</h2>
                <form className="login__form" onChange={handleChangeForm} onSubmit={handleSubmitForm}>
                    <label className="login__input">
                        E-mail
                        <input name="login-input-email" type="email" placeholder="Введите email" required></input>
                        {inputEmail && !isValidEmail && <span>Введите корректный email</span>}
                    </label>
                    <label className="login__input">
                        Пароль
                        <input name="login-input-password" type="password" placeholder="Введите пароль" required></input>
                        {inputPassword && !isValidPassword && <span>Пароль не менее 8 символов</span>}
                    </label>
                    {
                        errorCode
                    }
                    {isValidForm
                        ?<button className="login__submit-button" type="submit">Отправить</button>
                        :<button className="login__submit-button login__submit-button_disabled" type="submit" disabled>Отправить</button>
                    }
                    <span>Еще не разегистрированы? <Link to="/signup">Регистрация</Link></span>
                </form>
            </div>
        </section>
    )
}