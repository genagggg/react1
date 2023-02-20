import React, { useState } from 'react';
import s from './Main.module.css';
import MainButton from './MainButton/MainButton';
import { Button } from '@mui/material';


function completCounter() {
    console.log("some calculation")
    return Math.trunc(Math.random() * 20)
}

const Main = (props) => {

    const [counter, setCounter] = useState(() => { return completCounter() })

    function increment() {

        setCounter(counter + 1)

    }

    function decrement() {
        setCounter(counter - 1)
    }

    const [state, setState] = useState({
        title: "Счётчик",
        date: Date.now()
    })

    return (
        <div>
            <h1>Счётчик: {counter}</h1>
            <button onClick={increment} className='btn btn-success'>Добавить</button>
            <button onClick={decrement} className='btn btn-danger'>Убрать</button>
            <button onClick={() => setState({ title: 'Новое название' })} className='btn btn-danger'>Изменить название</button>
            <Button variant="outlined">Outlined</Button>
            <pre>
                {JSON.stringify(state, null, 2)}
            </pre>
        </div>
    );

}

export default Main;