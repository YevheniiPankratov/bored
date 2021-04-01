import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <header>
             <navbar>
                <h3>Назва</h3>
                <div className='links'>
                {1 > 0
                ? <ul>
                        <li><button id='login' href="#">ВХІД</button></li>
                        <li><button id='signup' href="#">РЕЄСТРАЦІЯ</button></li>
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
