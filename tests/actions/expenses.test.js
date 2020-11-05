import {removeExpense,editExpense,addExpense,startAddExpense,setExpense,startSetExpense} from "../../src/actions/expenses"
import expenses from "../fixtures/expenses"
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import database from "../../src/firebase/firebase"

beforeEach(()=>{
    const expenseData = {}
    expenses.forEach(({id,description,note,amount,createdAt})=>{
        expenseData[id] = {description,note,amount,createdAt}
    })

    database.ref('expenses').set(expenseData)
})

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

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
    
    const result = addExpense(expenses[1])

    expect(result).toEqual({
        type:"ADD_EXPENSE",
        expense:{...expenses[1]   
        }
    })
})

test('should dispatch action and fetch values from database',(done)=>{
    const store = mockStore({})
    const expenseData = {
        description:"mouse",
        note:"better",
        amount:1000,
        createdAt:1000,

    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:"ADD_EXPENSE",
            expense:{
                id:expect.any(String),
                ...expenseData 
            }

        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
})

test('should set expense correctly',()=>{
    const action = setExpense(expenses)
    expect(action).toEqual({
        type:"SET_EXPENSE",
        expenses 
    })
})

test('should fetch data and set values',(done)=>{
    const store = mockStore({})
    store.dispatch(startSetExpense()).then(()=>{
        const action = store.getActions()
        expect(action[0]).toEqual({
            type:"SET_EXPENSE",
            expenses
        });
        done()
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