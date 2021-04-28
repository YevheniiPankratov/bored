import React, {useRef, useState} from 'react'
import {useAuth} from '../../contexts/AuthContext';
import {Link} from 'react-router-dom';


export default function ForgotPass() {
    
    // const nameRef = useRef()
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)



    async function handleSubmit(e) {
        e.preventDefault();

            try {
                setError('')
                setMessage("")
                setLoading(true)
                await resetPassword(emailRef.current.value)
                setMessage("Перевірте свою поштову скриньку")
            } catch (e) {
                setError('Не вдалося скинути пароль!')
            }
            setLoading(false)

        
    }

    return (
        <div>
        <div className='sign'>
        <div className=''>
            <div className='card-body'>
                <h2 className='title'>Cкинути пароль</h2>
                <form onSubmit={handleSubmit}>
                {message && <div className='.err'>{message}</div>}
                 
                    <div className='sec' id='email'>
                            <label> Email </label>
                            <input type='email' ref={emailRef} required/>
                    </div>
                    
                    {error && <div className='err'>{error}</div>}
                    <button disabled={loading} id='btn' type='submit'>СКИНУТИ</button>
                    <div className='have'><Link to='/login' className='lk'>Вхід</Link></div>
                </form>
            </div>
            <div className='have'> Немає аккаунту?</div> 
            <div className='have'><Link to='/signup' className='lk'>Зареєструватися</Link></div>
             
        </div>
        
    </div>
    </div>
       
        
    )
}

