import React from 'react'
import './Home.css';
import Signup from '../../Components/Signup/Signup';
import {AuthProvider} from '../../contexts/AuthContext'

export default function Home() {
    return (
        <div className='home'>
            <AuthProvider>
                <Signup/>
            </AuthProvider>
            
        </div>
    )
}
