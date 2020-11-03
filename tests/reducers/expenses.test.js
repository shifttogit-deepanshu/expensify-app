import expenseReducer from "../../src/reducers/expenses"
import expenses from "../fixtures/expenses"


test('should return default values',()=>{
    const result = expenseReducer(undefined,{type:"@@INIT"})
    expect(result).toEqual([])
})

test('should remove expense from id',()=>{
    const result = expenseReducer(expenses,{type:"REMOVE_EXPENSE",id:expenses[1].id})
    expect(result).toEqual([expenses[0],expenses[2]])
})

test('should not remove expense if id not found',()=>{
    const result = expenseReducer(expenses,{type:"REMOVE_EXPENSE",id:-1})
    expect(result).toEqual(expenses)
})