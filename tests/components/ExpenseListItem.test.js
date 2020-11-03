import React from 'react'
import ExpenseListItem from "../../src/components/ExpenseListItem"
import {shallow} from "enzyme"
import expenses from "../fixtures/expenses"

test('should render expense list item ',()=>{
    const wrapper = shallow(<ExpenseListItem expense={expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
})