import React from 'react'
import ExpenseForm from "./ExpenseForm"
import {connect}  from "react-redux"
import {editExpense} from "../actions/expenses"
import { removeExpense } from '../actions/expenses';

const EditExpensePage = (props)=>{

    return (<div>
    <h2>This is EditExpensePage</h2>
    <ExpenseForm expense={props.expense} onSubmit={(expense)=>{
        props.dispatch(editExpense(props.match.params.id,expense))
        props.history.push('/')

    }}/>
    <button onClick={() => {
        props.dispatch(removeExpense({ id:props.match.params.id }));
        props.history.push('/')
      }}>Remove</button>
    </div>
    )
}
const mapStateToProps = (state,props)=>{
    return {
        expense:state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)