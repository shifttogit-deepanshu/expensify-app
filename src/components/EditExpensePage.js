import React from 'react'
import ExpenseForm from "./ExpenseForm"
import {connect}  from "react-redux"
import {editExpense} from "../actions/expenses"
import { removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.editExpense(this.props.expense.id,expense)
        this.props.history.push('/')

    }
    buttonClicked=() => {
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/')
      }
    

    render() {return (<div>
    <h2>This is EditExpensePage</h2>
    <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
    <button onClick={this.buttonClicked}>Remove</button>
    </div>)
    }
}
const mapStateToProps = (state,props)=>{
    return {
        expense:state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        editExpense:(id,expense)=>dispatch(editExpense(id,expense)),
        removeExpense:(id)=>dispatch(removeExpense({id}))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)