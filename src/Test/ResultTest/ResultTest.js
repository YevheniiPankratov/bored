import React from 'react'


import './ResultTest.css';


export default function ResultTest() {
    
    return (
        <div className='ResultTest'>
            <h1 style={{textAlign: 'center'}}>Чудово! Ви закінчили тест! Ми пропонуємо вам наступні результати!</h1>
            <div className='slider'>
		



            {/* <Slider className="slider-wrapper">
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
		</Slider> */}
            </div>
        </div>
    )
}
