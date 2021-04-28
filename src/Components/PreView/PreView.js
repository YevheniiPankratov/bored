import React from 'react'
import { Link} from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './PreView.css'

export default function PreView() {
    const {currentUser} = useAuth()

    return (
            <div className='preview'>
                {currentUser ? 
                <Loged/>
                : <UnLog/>
                }
            </div>
    )
}

function UnLog() {
    return (          
            <div className='main'>
            <h1 style={{textAlign: 'center'}}>Ласково просимо на рекомендаційний веб-сайт для планування дозвілля!</h1>
            <p className='par'>На планеті Земля дуже багато людей в даний час не знають чим їм зайнятися. 
            Підти в кінотеатер, відвідати ТРЦ, почитати цікаву книгу або пограти в комп’ютерну гру? 
            Ви не придумали чим вам зайнятися у вільний час? Якщо ні - то потрібно зареєструватися або увійти 
            до профілю, пройти тестування та отримати наші рекомендації!
            </p>
            <ul>
                        <li><Link id='login' className='c' to='/login'>ВХІД</Link></li>
                        <li><Link id='signup' className='c' to='/signup'>РЕЄСТРАЦІЯ</Link></li>
                </ul>
        </div>
    )
}

function Loged() {
    return (          
            <div className='main'>
            <h1 style={{textAlign: 'center'}}>Пройдіть тест та отримайте наші рекомендації для планування дозвілля. Гарного вам настрою! =)</h1>
            <Link id='signup' className='c cc' to='/recomend-test'>РОЗПОЧАТИ</Link>
            <div className='happy'></div>

        </div>
    )
}