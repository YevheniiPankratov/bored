import React, { useState } from 'react';
import './RecomendTest.css'
import {content, data} from '../../data/data';
import { useRef } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useEnv} from '../../contexts/EnvironmentContext';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../RecomendTest/RecomendTest.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function RecomendTest() {
  
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const [answers, setAnswers] = useState([]);
  const radiosWrapper = useRef();
  const environmentProfile = useEnv()
  
  const all = answers.concat(environmentProfile);
  

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }

  const clickHandler = () => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }

    setAnswers([...answers, selected]);
        console.log(answers);
        console.log(all);
        console.log(environmentProfile);
        setSelected('');

    switch (selected) {
      case '':
        return setError('Потрібно вибрати одну відповідь!');
      case 'З родиною':
        return setActiveQuestion(activeQuestion + 5);
      case 'З друзями':
        return setActiveQuestion(activeQuestion + 4);
      case 'З коханою людиною':
        return setActiveQuestion(activeQuestion + 4);
      case 'Дома':
        return setActiveQuestion(activeQuestion + 2);
      case 'Не готовий витрачати гроші':
        return setActiveQuestion(activeQuestion + 4);
      case 'До 200 гривeнь':
        return setActiveQuestion(activeQuestion + 4);
      case '200-500 гривeнь':
        return setActiveQuestion(activeQuestion + 4);
      case 'Більше 500 гривeнь':
        return setActiveQuestion(activeQuestion + 4);
      case 'Дoма':
        return setActiveQuestion(activeQuestion + 5);
      case 'Потреби в самоосвіті, набуття нових знань':
        return setActiveQuestion(activeQuestion + 2);
      case 'Бажання долучитися до мистецтва та творчості':
        return setActiveQuestion(activeQuestion + 2);
      default:
        return setActiveQuestion(activeQuestion + 1);
    }
    
  };

    return (
      <div >
        {
          data.quests[activeQuestion].title === 'end'
          ?<div>  
              <div className='centerr'>
              <h2 className='t2'>Чудово! Ви завершили тестування! Ми пропонуємо вам наступні результати!</h2>
              <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{el: '.swiper-pagination',
                  clickable: true}}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  >

                   {content.filter(i => answers.every(j => i.answs.includes(j))).map((item, index) => (
                    <SwiperSlide
                      key={index}
                      className="slider-content"
                      style={{ background: `url('${item.image}') center/cover no-repeat`}}>
                      <div className="inner">
                        <h1 className='hh1'>{item.title}</h1>
                        <p className='pp'>{item.description}</p>
                        {item.link ? <a className='ll' href={item.link} target='_blank' rel="noreferrer"><button>ПЕРЕЙТИ</button></a> : null}
                      </div>
                      </SwiperSlide>
                          ))}
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        </Swiper>
                        
             </div>
             </div>
          :
          <div className='test'>
        <h1 className='title'>Скоріше пройдіть тест та отримайте рекомендацію.</h1>
        <div className='cardd'>
        <h2 className='t2'>{data.quests[activeQuestion].title}</h2>
          <div className='cardd-body'>
              <div className='control' ref={radiosWrapper}>
                {
                  data.quests[activeQuestion].choices.map((choice, i) => (
                    <label className='radio' key={i}>
                  <input className='marg' type='radio' name='answer' value={choice} onChange={changeHandler}/>
                  <span>{choice}</span>
                    </label>
                  ))
                }
              </div>
            </div>
            {error && <div className="err">{error}</div>}
            <div className='btn-next'>
            <button id='signup' className='c next' onClick={clickHandler}>Наступне питання</button>
            </div>
          </div>
          </div>
        }
        </div>
    )
}

