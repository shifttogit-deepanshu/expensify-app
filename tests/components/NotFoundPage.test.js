import React from "react"
import NotFoundPage from "../../src/components/NotFoundPage"
import {shallow} from "enzyme"

test('should render not found page',()=>{
    const wrapper = shallow(<NotFoundPage/>)
    expect(wrapper).toMatchSnapshot()
})