import React, { useEffect, useState } from 'react';
import './RecomendTest.css'
import {content, data} from '../../data/data';
import { useRef } from 'react';
import {useEnv} from '../../contexts/EnvironmentContext';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../RecomendTest/RecomendTest.css';

export default function RecomendTest() {
  
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const [answers, setAnswers] = useState();
  const radiosWrapper = useRef();
  const environmentProfile = useEnv()

  
  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }

  useEffect(() => {
    setAnswers(environmentProfile)
  }, [])

  const clickHandler = () => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }

    setAnswers([...answers, selected]);
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
          ? 
          <div>  
              <div className='centerr'>
              <h2 className='t2'>Чудово! Ви завершили тестування! Ми пропонуємо вам наступні результати!</h2>
                        <div className='cont'>
                        {content.filter(i => answers.every(j => i.answs.includes(j))).map((item, index) => (
                        <div className="card" key={index}>
                            <img src={item.image} alt="img" className='imgg'/>
                            <div className="container">
                              <h4><b>{item.title}</b></h4> 
                              <p className='text'>{item.description}</p>
                              {item.link ? <a className='lkbtn' href={item.link} target='_blank' rel="noreferrer">ПЕРЕЙТИ</a> : null}
                            </div>
                          </div>))}
                </div>
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

