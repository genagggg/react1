import React, { useState } from 'react';
import s from './Main.module.css';
import MainButton from './MainButton/MainButton';
const Main = (props) => {

    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>Счётчик: {counter}</h1>
            <button onClick={increment} className='btn btn-success'>Добавить</button>
            <button onClick={decrement} className='btn btn-danger'>Убрать</button>
        </div>
    );

}

export default Main;