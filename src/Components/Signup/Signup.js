import React, {useRef, useState} from 'react'
import './Signup.css'
import {useAuth} from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'


export default function Signup() {
    
    // const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Паролі не збігаються!')
        }
            try {
                setError('')
                setLoading(true)
                signup(emailRef.current.value, passwordRef.current.value)
            } catch (e) {
                setError('Не вдалося створити обліковий запис!')
            }
            setLoading(false)

        
    }

    return (
        <div className='sign'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='title'>Реєстрація</h2>
                    <form onSubmit={handleSubmit}>
                        {/* <div className='sec' id='name'>
                                <label> Ім'я </label>
                                <input type='text' ref={nameRef} required/>
                        </div> */}
                        <div className='sec' id='email'>
                                <label> Email </label>
                                <input type='email' ref={emailRef} required/>
                        </div>
                        <div className='sec' id='password'>
                                <label> Пароль </label>
                                <input type='password' ref={passwordRef} required/>
                        </div>
                        <div className='sec' id='password-confirm'>
                                <label> Підтвердження паролю </label>
                                <input type='password' ref={passwordConfirmRef} required/>
                        </div>
                        {error && <div style={{textAlign: 'center', color: 'red', fontSize: '12px'}}>{error}</div>}
                        <button disabled={loading} type='submit'>Зареєструватися</button>
                    </form>
                </div>
                <div className='have'> Вже є аккаунт? <Link className='lk' to='/login'>Увійти</Link> </div>
            </div>
            
        </div>
    )
}
