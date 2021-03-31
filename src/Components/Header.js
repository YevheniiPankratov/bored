import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <navbar>
            <h3>name</h3>
            <div className='links'>
                <ul>
                    <li><button href="#">sign</button></li>
                    <li><button href="#">log</button></li>
                </ul>
            </div>
        </navbar>
    )
}
