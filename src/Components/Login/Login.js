import React, {useRef, useState} from 'react'
import './Login.css'
import {useAuth} from '../../contexts/AuthContext';
import {Link} from 'react-router-dom'


export default function Login() {
    
    // const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault();

            try {
                setError('')
                setLoading(true)
                login(emailRef.current.value, passwordRef.current.value)
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
                    {error && <div style={{textAlign: 'center', color: 'red', fontSize: '12px'}}>{error}</div>}
                    <button disabled={loading} type='submit'>Увійти</button>
                </form>
            </div>
            <div className='have'> Немає аккаунту?</div> 
            <div className='have'><Link to='/signup' className='lk'>Зареєструватися</Link></div>
             
        </div>
        
    </div>
    </div>
       
        
    )
}
