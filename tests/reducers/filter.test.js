import filterReducer from "../../src/reducers/filter"

import moment from 'moment'

test('should init reducer with default values',()=>{
    const result = filterReducer(undefined,{type:"@@INIT"})

    expect(result).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should set sortBy to amount',()=>{
    const result = filterReducer(undefined,{type:'SORT_BY_AMOUNT'}) 
    expect(result.sortBy).toBe('amount')
})

test('should set sortBy to date',()=>{
    const state = {
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    const result = filterReducer(undefined,{type:'SORT_BY_DATE'})
    expect(result.sortBy).toBe('date')
}) 

test('should set text filter',()=>{
    const result = filterReducer(undefined,{type:"SET_TEXT_FILTER",text:"Deepanshu"})
    expect(result.text).toBe("Deepanshu")
})

test('should set text filter',()=>{
    const result = filterReducer(undefined,{type:"SET_TEXT_FILTER",text:"Deepanshu"})
    expect(result.text).toBe("Deepanshu")
})


test('should set startDate filter',()=>{
    const result = filterReducer(undefined,{type:"SET_START_DATE",startDate:moment(123)})
    expect(result.startDate).toEqual(moment(123))
})


test('should set endDate filter',()=>{
    const result = filterReducer(undefined,{type:"SET_END_DATE",endDate:moment(123)})
    expect(result.endDate).toEqual(moment(123))
})