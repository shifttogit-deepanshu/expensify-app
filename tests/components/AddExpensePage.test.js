import React from 'react'
import {AddExpensePage} from '../../src/components/AddExpensePage'
import { shallow } from 'enzyme'
import expenses from "../fixtures/expenses"
test('should render add expense correctly',()=>{
    const onSubmit = jest.fn();
    const history = {push:jest.fn()};
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>)
    expect(wrapper).toMatchSnapshot()

})

test('should run onSubmit function',()=>{
    const onSubmit = jest.fn();
    const history = {push:jest.fn()};
    const wrapper = shallow(<AddExpensePage startAddExpense={onSubmit} history={history}/>)
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
})
