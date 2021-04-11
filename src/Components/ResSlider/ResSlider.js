import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './ResSlider.css'

const content = [
	{
		title: 'Кінотеатр Multiplex',
		description:
		'Світ кіно захоплює нас цілком і повністю. Сьогодні складно знайти людину, яка б не любила дивитися фільми. Залежно від характеру та особистих уподобань, різним людям більше подобається дивитися фільми вдома або в кінотеатрі. Якщо ви хочете отримати справжнє задоволення від перегляду фільму, тоді сміливо вирушайте в кінотеатр «Multiplex». Навколишнє атмосфера, якість звуку і відео нікого не залишать байдужим.',
		link: 'https://multiplex.ua/ru/cinema/kharkiv/dafi',
		image: 'https://storage1b.censor.net/images/e/4/d/e/e4de6bb9d55a0169438f0afa4d4ea0d8/original.jpg',
	},
	{
		title: 'ТРЦ Караван',
		description:
		'Провести весь день в торговому центрі? Чому б і ні? Поповніть свій гардероб, сходіть в кінотеатр, тренажерний зал, квест-кімнату, зіграйте з друзями в боулінг і обміняйтеся новинами за чашкою кави.',
		link: 'https://kharkov.karavan.com.ua/',
		image: 'https://karavan.ua/wp-content/uploads/2017/11/DSC_1513-1068x707.jpg',
	},
	{
		title: 'Готель Kharkiv Palace',
		description:
		'Ви зможете знайти тут все, що необхідне для повноцінного відпочинку: просторі номери та розкішні апартаменти з приголомшливим видом на місто, кращі зали для проведення найважливіших заходів, великий вибір ресторанів і барів і, звичайно ж, SPA-послуги для емоційного розслаблення після напруженого дня або фізичного відновлення.',
		link: 'https://kharkiv-palace.com/ru/',
		image: 'https://kharkiv-palace.com/wp-content/webpc-passthru.php?src=https://kharkiv-palace.com/wp-content/uploads/2019/03/kharkiv_palace_fb.jpg&nocache=1',
	},
	{
		title: 'Боулінг-клуб Магніт',
		description:
		"Боулінг - одночасно і командна, і одиночна гра. Незалежно від складу вашої компанії, якщо вас лише двоє чи десять чоловік, гра може стати однаково цікавою. Ви самі можете вирішити, як грати - команда проти команди, дівчата проти хлопців, бухгалтери проти програмістів, клас проти класу. Або ж ви можете влаштувати турнір і визначити кращого гравця, вважаючи окуляри в особистому турнірі. В боулінг-клубі крім самої гри зазвичай можна знайти і додаткові розваги, в тому числі бар або замовлення страв по меню.",
		link: 'https://bowling-magnit.com/',
		image: 'https://www.kdvir.com/public/images/image/0012.jpg',
	},
	{
		title: 'Шоу-ресторан AltBier',
		description:
		'На столі – смачні страви і келих прохолодного пива з пишною піною. На сцені – шоу-програма з чудовими танцюристами, вокалістами та живою музикою. А поруч – кохана людина, близькі друзі або веселі колеги з посмішками на обличчях. Чудовий сценарій, правда? Шоу-ресторан ALTBIER запрошує в гості всіх кому є більше 18 років та хто любить веселитися від душі. Дегустують найпопулярніші кухні світу, відкривайте секрети чеських пивоварів і насолоджуйтеся відпочинком в дружній компанії!',
		link: 'https://showrest-altbier.com.ua/',
		image: 'https://www.78.com.ua/files/images/Altbier/Interior/ee2bcf5b7acdbb8fa2e53eacc5d06117.jpg',
	}
];

export default function ResSlider() {
    return (

            <Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center`}}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<a className='ll' href={item.link} target='_blank' rel="noreferrer"><button>перейти</button></a>
					</div>
				</div>
			))}
		</Slider>
    )
}


