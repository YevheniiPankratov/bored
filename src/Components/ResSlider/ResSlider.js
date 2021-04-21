import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './ResSlider.css'
import {content} from '../../data/data'

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


