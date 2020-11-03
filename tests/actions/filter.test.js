import {setStartDate,setEndDate,setTextFilter,sortByAmount,sortByDate}  from "../../src/actions/filter"

import moment from "moment"

test('set start date object',()=>{
    const result = setStartDate(moment(12))
    expect(result).toEqual({
        type:"SET_START_DATE",
        startDate:moment(12)
    })
})

test('set end date object',()=>{
    const result = setEndDate(moment(12))
    expect(result).toEqual({
        type:"SET_END_DATE",
        endDate:moment(12)
    })
})

test('set text filter object',()=>{
    const result = setTextFilter('text')
    expect(result).toEqual({
        type:"SET_TEXT_FILTER",
        text:"text"
    })

})
test('set text filter object default',()=>{
    const result = setTextFilter()
    expect(result).toEqual({
        type:"SET_TEXT_FILTER",
        text:""
    })

})
test('sort by date object',()=>{
    const result= sortByDate()
    expect(result).toEqual({
        type:"SORT_BY_DATE"
    })

})
test('sort by amount object',()=>{
    const result= sortByAmount()
    expect(result).toEqual({
        type:"SORT_BY_AMOUNT"
    })

})