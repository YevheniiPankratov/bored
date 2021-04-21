import React from 'react';
import '../Footer/Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='friends'>
            <h3>Спонсори проекту:</h3>
            <ul>
                <li> <a target='_blank' rel="noreferrer" href="https://multiplex.ua/ru/cinema/kharkiv/dafi">Кінотеатр Multiplex</a></li> |
                <li> <a target='_blank' rel="noreferrer" href="https://kharkov.internet-bilet.ua/ru">Інтернет-білет UA</a></li>   |   
                <li> <a target='_blank' rel="noreferrer" href="https://kharkov.karavan.com.ua/">ТРЦ Караван</a></li>   | 
                <li> <a target='_blank' rel="noreferrer" href="https://kharkiv-palace.com/ru/">Готель Kharkiv Palace</a></li>   | 
                <li> <a target='_blank' rel="noreferrer" href="https://showrest-altbier.com.ua/">Шоу-ресторан AltBier</a></li>   | 
                <li> <a target='_blank' rel="noreferrer" href="https://bowling-magnit.com/">Боулінг-клуб Магніт</a></li>
            </ul>
            </div>
            <h5 className='law'>© Назва, 2021 р. Усі права захищено.</h5>
        </footer>
    )
}
