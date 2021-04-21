import React, { useContext, useState } from 'react';
import './RecomendTest.css'
import {data} from '../../data/data';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';



export default function RecomendTest() {
  
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const [answers, setAnswers] = useState([]);
  const radiosWrapper = useRef();
  const history = useHistory()

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


  console.log(answers);
 
    return (
      <div className='test'>
        {answers}
        {
          data.quests[activeQuestion].title === 'Чудово! Ви закінчили тест! Натисніть на кнопку щоб подивитися результати!'
          ?<div>  
              <div className='center'>
              <h2 className='t2'>{data.quests[activeQuestion].title}</h2>
              <div className='happyy'></div>
              <button id='signup' className='c next' onClick={history.push('/result-test')}>Подивитися результати</ button>
             </div>
             </div>
          :
          <div>
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