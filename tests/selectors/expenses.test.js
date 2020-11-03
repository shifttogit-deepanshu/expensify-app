import selectExpenses from "../../src/selectors/expenses"
import expenses from "../fixtures/expenses"

import moment from "moment"


test('should filter by text',()=>{
    const filter={
        text:'e',
        startDate:undefined,
        endDate:undefined,
        sortBy:'date'

    }
    const result = selectExpenses(expenses,filter)

    expect(result).toEqual([expenses[2],expenses[1]])
})

test('should filter by start date',()=>{
    const filter={
        text:'',
        startDate:moment(0),
        endDate:undefined,
        sortBy:'date'

    }
    const result = selectExpenses(expenses,filter)

    expect(result).toEqual([expenses[2],expenses[1]])
})


test('should filter by end date',()=>{
    const filter={
        text:'',
        endDate:moment(0),
        startDate:undefined,
        sortBy:'date'

    }
    const result = selectExpenses(expenses,filter)

    expect(result).toEqual([expenses[1],expenses[0]])
})

test('should filter by date',()=>{
    const filter = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }

    const result = selectExpenses(expenses,filter)

    expect(result).toEqual([expenses[2],expenses[1],expenses[0]])
})
test('should filter by amount',()=>{
    const filter = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }

    const result = selectExpenses(expenses,filter)

    expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
})