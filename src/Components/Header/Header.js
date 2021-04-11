import React, { useState } from 'react'
import './Header.css'
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';


export default function Header() {

    const {currentUser, logout} = useAuth()
    const history = useHistory()
    const [error, setError] = useState('')

    async function handleLogout() {
        setError('')

        try {
            await logout()
        } catch {
            setError('failed')
        }
    }

    return (
        <header>
             <navbar>
             <Link className='c' to='/'>Назва</Link>
                
                <div className='links'>
                {!currentUser
                ? <ul>
                        <li><Link id='login' className='c' to='/login'>ВХІД</Link></li>
                        <li><Link id='signup' className='c' to='/signup'>РЕЄСТРАЦІЯ</Link></li>
                </ul>
                : <ul>
                    <li><Link id='login' className='c' to='/update-profile'>ПРОФІЛЬ</Link></li>
                    <li><Link id='signup' className='c' to='/' onClick={handleLogout}>ВИЙТИ</Link></li>
                </ul>
                }
            </div>
         </navbar>
        </header>
       
    )
}
