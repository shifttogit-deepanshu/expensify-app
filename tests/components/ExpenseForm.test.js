import React from "react"
import ExpenseForm from "../../src/components/ExpenseForm"
import {shallow} from "enzyme"
import expenses from "../fixtures/expenses"

test('should render expense form correctly',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense form correctly with data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()

})

test('should set description on change',()=>{
    const value="desc changed"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should set note on change',()=>{
    const value="note changed"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should run the onsubmit function',()=>{
    const submitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={submitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe('');
    expect(submitSpy).toHaveBeenCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    });
});

// test('should change calender date with onDateChange',()=>{
//     const wrapper = shallow(<ExpenseForm/>)
//     wrapper.find('SingleDatePicker').prop('onDateChange')(moment())
//     expect(wrapper.state('createdAt')).toEqual(moment())
// })

// test('should change focused on focus change',()=>{
//     const wrapper = shallow(<ExpenseForm/>)
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true})
//     expect(wrapper.state('calenderFocused')).toBe({focused:true})

// })