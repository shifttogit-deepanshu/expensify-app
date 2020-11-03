import {removeExpense,editExpense,addExpense} from "../../src/actions/expenses"

test("should remove an expense",()=>{
    const result = removeExpense({id:45})
    expect(result).toEqual({
        type:"REMOVE_EXPENSE",
        id:45
    })
})

test("should edit the expense",()=>{
    const result = editExpense(2,{key:'value'})
    expect(result).toEqual({
        type:"EDIT_EXPENSE",
        id:2,
        updates:{
            key:"value"
        }
    })
})

test("should add an expense",()=>{
    const expenseData = {
        description:"desc",
        note:"not note",
        amount:1000,
        createdAt:1200
    }
    const result = addExpense(expenseData)

    expect(result).toEqual({
        type:"ADD_EXPENSE",
        expense:{...expenseData   
        }
    })
})

// test("should add an expense with default values",()=>{
//     const result = addExpense()

//     expect(result).toEqual({
//         type:"ADD_EXPENSE",
//         expense:{
//             id:expect.any(String),
//             description:"",
//             note:"",
//             amount:0,
//             createdAt:0
//         }
//     })

// })