import React from 'react'
import ReactDOM from 'react-dom'
import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter'

import configureStore from "./store/configureStore"

import {addExpense} from "./actions/expenses"
import {Provider} from "react-redux"
import {setTextFilter} from "./actions/filter"

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({description:"water bill",amount:1000,note:"water bill is high",createdAt:100}))

store.dispatch(addExpense({description:"gas bill",amount:3000,note:"gas bill is high too",createdAt:1000}))
store.dispatch(addExpense({description:"rent",amount:9000,note:"This is the rent bill",createdAt:700}))


// store.subscribe(()=>{
//     const state = store.getState()

//     const visible = visibleExpenses(state.expenses,state.filter)
//     console.log(visible)

// })

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx,document.getElementById('approot'))