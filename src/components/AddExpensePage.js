import React from 'react'
import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {addExpense} from "../actions/expenses"


const AddExpensePage = (props)=>{
    
    return <div>
    <h2>This is AddExpensePage</h2>
    <ExpenseForm onSubmit={(expense)=>{
        props.dispatch(addExpense(expense))
        props.history.push('/')
    }}/>
    </div>
    
}

export default connect()(AddExpensePage);