import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let n = [
  {id:1, name:'Andrey'},
  {id:2, name:'Robert'},
  {id:3, name:'Artur'},
  {id:4, name:'Anjela'},
  {id:5, name:'Svets'}
];


let messageUser = [
{id:1, messages:"Hi"},
{id:2, messages:"How"},
{id:3, messages:"Are"},
{id:4, messages:"You"},
{id:5, messages:"yes"}
];
ReactDOM.render(
  <React.StrictMode>
    <App n={n} messageUser={messageUser}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
