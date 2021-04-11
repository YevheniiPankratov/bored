import React, {useRef, useState} from 'react'
import './UpdateProfile.css'
import {useAuth} from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'


export default function UpdateProfile() {
    
    const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Паролі не збігаються!")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/home")
      })
      .catch(() => {
        setError("Не вдалося оновити обліковий запис")
      })
      .finally(() => {
        setLoading(false)
      })
    }

    return (
        <div className='sign'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='title'>Обновлення профілю</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='sec' id='email'>
                                <label> Email </label>
                                <input type='email' ref={emailRef} required defaultValue={currentUser.email}/>
                        </div>
                        <div className='sec' id='password'>
                                <label> Пароль </label>
                                <input type='password' ref={passwordRef} required/>
                        </div>
                        <div className='sec' id='password-confirm'>
                                <label> Підтвердження паролю </label>
                                <input type='password' ref={passwordConfirmRef} required/>
                        </div>
                        {error && <div className='err'>{error}</div>}
                        <button disabled={loading} type='submit'>Обновити</button>
                    </form>
                </div>
                <div className='have'><Link className='lk' to='/'>Скасувати</Link> </div>
            </div>
            
        </div>
    )
}
