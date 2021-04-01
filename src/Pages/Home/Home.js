import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Home.css';
import UpdateProfile from '../../Components/UpdateProfile/UpdateProfile'

export default function Home() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('failed')
        }
    }
    return (
        <div>
            <div className='slider'>
                <strong>EMAIL:</strong> {currentUser.email}
                <Link to='/update-profile' className='p'>Update profile</Link>
                
                <button onClick={handleLogout}>выйти</button>
            </div>
        </div>
    )
}
