import React from "react"
import {connect} from "react-redux"
import {setTextFilter} from "../actions/filter"
import {sortByDate} from "../actions/filter"
import {sortByAmount} from "../actions/filter"
import {DateRangePicker} from "react-dates"
import {setStartDate} from "../actions/filter"
import {setEndDate} from "../actions/filter"

class ExpenseListFilters extends React.Component{
    constructor(props){
        super(props)
        this.state={
            focusedInput:null
        }
    }
    onDatesChange = ({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    render(){
    return (<div>
    <input type="text" value={this.props.filter.text} onChange={(e)=>{
        this.props.dispatch(setTextFilter(e.target.value))
    }} />
    <select value={this.props.filter.sortBy} onChange={(e)=>{
        if(e.target.value=="date"){
            this.props.dispatch(sortByDate())
        }
        else if(e.target.value=="amount"){
            this.props.dispatch(sortByAmount())
        }}}>
    <option value="date">Date</option>
    <option value="amount">Amount</option>
    </select>
    <DateRangePicker
    startDate={this.props.filter.startDate}
    endDate={this.props.filter.endDate}
    onDatesChange={this.onDatesChange}
    focusedInput={this.state.focusedInput}
    onFocusChange={focusedInput => this.setState({ focusedInput })}
    showClearDates={true}
    isOutsideRange={()=>false}

    numberOfMonths={1}

    />
    </div>)
    }
}

const StateToProps = (state)=>{
    return {
        filter:state.filter
    }
}

export default connect(StateToProps)(ExpenseListFilters)

