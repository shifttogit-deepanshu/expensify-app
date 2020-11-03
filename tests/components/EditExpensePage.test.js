import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../src/components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense,history,removeExpense,wrapper

beforeEach(()=>{
    editExpense = jest.fn()
    history = {push:jest.fn()}
    removeExpense = jest.fn()
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        history={history} 
        removeExpense={removeExpense}
        expense={expenses[1]} />)

})

test('should render page correctly',()=>{
    
    expect(wrapper).toMatchSnapshot()
})

test('should run editExpense function correctly',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should remove expense correcty',()=>{
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id)
})

