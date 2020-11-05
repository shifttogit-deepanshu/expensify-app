import React from 'react'
import ReactDOM from 'react-dom'
import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter'

import configureStore from "./store/configureStore"

import {startSetExpense} from "./actions/expenses"
import {Provider} from "react-redux"


import 'normalize.css/normalize.css'
import './styles/styles.scss'

import "./firebase/firebase"


// import expenses from '../tests/fixtures/expenses'
// const getExpensesTotal = (expenses)=>{
//     return expenses.reduce((total,item)=>{
//         return total + item.amount
//     },0)
// }

// console.log(getExpensesTotal(expenses))

const store = configureStore()


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading....</p>,document.getElementById('approot'))

store.dispatch(startSetExpense()).then(()=>{
    ReactDOM.render(jsx,document.getElementById('approot'))
})
