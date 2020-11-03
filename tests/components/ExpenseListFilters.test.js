import React from 'react'
import {ExpenseListFilters} from '../../src/components/ExpenseListFilters'
import {shallow} from 'enzyme'
import moment from 'moment'
import {filters,altFilters} from '../fixtures/filters'

let setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount,wrapper

beforeEach(()=>{
    setStartDate=jest.fn()
    setEndDate=jest.fn()
    setTextFilter=jest.fn()
    sortByDate=jest.fn()
    sortByAmount=jest.fn()
    wrapper = shallow(<ExpenseListFilters 
        filter={filters}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
         />)

})

test('should render component correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should render component correctly with altFilters',()=>{
    wrapper.setProps({filter:altFilters})
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change',()=>{
    const value = "rent"
    wrapper.find('input').simulate('change',{
        target:{ value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})
test('should sort by date',()=>{
    wrapper.setProps({
        filters:{altFilters}
    })
    const value="date";
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByDate).toHaveBeenCalled()
})
test('should sort by amount',()=>{
    const value="amount";
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})
// test('should set date changes',()=>{
//     const startDate = moment(0).add(4,'years')
//     const endDate = moment(0).subtract(8,'years')
//     wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
//     expect(setStartDate).toHaveBeenLastCalledWith(startDate)
//     expect(setEndDate).toHaveBeenLastCalledWith(endDate)
// })
