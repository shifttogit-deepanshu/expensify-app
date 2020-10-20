import React from "react"

import { SingleDatePicker} from 'react-dates';

import moment from "moment"

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
      
        this.state={
            description:props.expense ? props.expense.description: '',
            notes:props.expense ? props.expense.notes : '',
            amount:props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt:props.expense ? moment(props.expense.createdAt) : moment(),
            focused:false,
            error:''
        }

    }
   
    onDescriptionChange = (e)=>{
        const description = e.target.value
        this.setState(()=>({description}))
    }
    onNotesChange = (e)=>{
        const notes = e.target.value
        this.setState(()=>({notes}))
    }
    onAmountChange = (e)=>{
        const amount = e.target.value
        if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)){
        this.setState(()=>({amount}))
        }
    }
    onDateChange = (createdAt)=>{
        if(createdAt){
        this.setState(()=>({createdAt}))
        }
    }
    onFocusChange = ({focused})=>{
        this.setState(()=>({focused}))
    }
    onSubmit = (e)=>{
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error:"Description and amount cannot be left blank"}))
        }
        else{
            console.log("submitted")
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                notes:this.state.notes
            
            })
        }
    }
    render(){
        return (
            <div>
            <h2>{this.state.error}</h2>
            <form onSubmit={this.onSubmit}>

            <input type="text" placeholder="description" autoFocus value={this.state.description} 
            onChange={this.onDescriptionChange}/><br/>
            <input type="number" placeholder="amount" value={this.state.amount} onChange={this.onAmountChange}/><br/>
            <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            /><br/>
            <textarea placeholder="add note here" value={this.state.notes} onChange={this.onNotesChange}></textarea><br/>
            <button>Add Expense</button>
            </form>

            </div>
        )
    }
}