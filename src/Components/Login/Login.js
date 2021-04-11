import React, {useRef, useState} from 'react'
import {useAuth} from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';


export default function Login() {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault();

            try {
                setError('')
                setLoading(true)
                login(emailRef.current.value, passwordRef.current.value)
                history.push('/')
            } catch (e) {
                setError('Не вдалося увійти до системи!')
            }
            setLoading(false)
    }

    return (
        <div>
        <div className='sign'>
        <div className='card'>
            <div className='card-body'>
                <h2 className='title'>Вхід</h2>
                <form onSubmit={handleSubmit}>
                    <div className='sec' id='email'>
                            <label> Email </label>
                            <input type='email' ref={emailRef} required/>
                    </div>
                    <div className='sec' id='password'>
                            <label> Пароль </label>
                            <input type='password' ref={passwordRef} required/>
                    </div>
                    {error && <div className='err'>{error}</div>}
                    <button disabled={loading} type='submit'>Увійти</button>
                    <div className='have'><Link to='/forgot-pass' className='lk'>Забули пароль?</Link></div>
                </form>
            </div>
            <div className='have'> Немає аккаунту?</div> 
            <div className='have'><Link to='/signup' className='lk'>Зареєструватися</Link></div>
             
        </div>
        
    </div>
    </div>
       
        
    )
}
