import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
             <navbar>
                <h3>Назва</h3>
                <div className='links'>
                {1 > 0
                ? <ul>
                        <li><Link id='login' className='c' to='/login'>ВХІД</Link></li>
                        <li><Link id='signup' className='c' to='/signup'>РЕЄСТРАЦІЯ</Link></li>
                </ul>
                : <ul>
                    <li><button id='login' href="#">ПРОФІЛЬ</button></li>
                    <li><button id='signup' href="#">ВИЙТИ</button></li>
                </ul>
                }
            </div>
         </navbar>
        </header>
       
    )
}
