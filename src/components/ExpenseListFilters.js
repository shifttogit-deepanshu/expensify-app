import React from "react"
import {connect} from "react-redux"
import {setTextFilter} from "../actions/filter"
import {sortByDate} from "../actions/filter"
import {sortByAmount} from "../actions/filter"
import {DateRangePicker} from "react-dates"
import {setStartDate} from "../actions/filter"
import {setEndDate} from "../actions/filter"

export class ExpenseListFilters extends React.Component{
    constructor(props){
        super(props)
        this.state={
            focusedInput:null
        }
    }
    onDatesChange = ({startDate,endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onTextChange=(e)=>{
        this.props.setTextFilter(e.target.value)
    }
    onDateFilterChange=(e)=>{
        if(e.target.value=="date"){
            this.props.sortByDate()
        }
        else if(e.target.value=="amount"){
            this.props.sortByAmount()
        }}
    render(){
    return (<div>
    <input type="text" value={this.props.filter.text} onChange={this.onTextChange} />
    <select value={this.props.filter.sortBy} onChange={this.onDateFilterChange}>
    <option value="date">Date</option>
    <option value="amount">Amount</option>
    </select>
    <DateRangePicker
    startDate={this.props.filter.startDate}
    startDateId='startTheDate'
    endDate={this.props.filter.endDate}
    endDateId="endTheDate"
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
const mapDispatchtoProps = (dispatch)=>{
    return {
        setStartDate: (startDate)=>{dispatch(setStartDate(startDate))},
        setEndDate:(endDate)=>{dispatch(setEndDate(endDate))},
        setTextFilter:(data)=>{dispatch(setTextFilter(data))},
        sortByDate:()=>{dispatch(sortByDate())},
        sortByAmount:()=>{dispatch(sortByAmount())}

    }
}

export default connect(StateToProps,mapDispatchtoProps)(ExpenseListFilters)

