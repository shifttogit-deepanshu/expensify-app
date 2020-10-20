import {createStore,combineReducers} from "redux"
import { v4 as uuidv4 } from 'uuid';

const expenseReducerDefault = [];

const addExpense = ({description='',note='',amount=0,createdAt=0}={})=>(
    {   type:"ADD_EXPENSE",
        expense:{
        id:uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
}
)

const removeExpense = ({id=0}={})=>(
    {
        type:"REMOVE_EXPENSE",
        id
    }
)

const editExpense = (id,updates)=>({
    type:"EDIT_EXPENSE",
    id,
    updates
})

const setTextFilter = (text)=>({
    type:"SET_TEXT_FILTER",
    text
})

const sortByAmount=()=>({
    type:"SORT_BY_AMOUNT"
})
const sortByDate=()=>({
    type:"SORT_BY_DATE"
})

const setStartDate=(startDate=undefined)=>({
    type:"SET_START_DATE",
    startDate

})
const setEndDate=(endDate=undefined)=>({
    type:"SET_END_DATE",
    endDate

})

const visibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== "number" || startDate <= expense.createdAt
        const endDateMatch = typeof endDate !== "number" || endDate >= expense.createdAt
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) 
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy==="date"){
            return a.createdAt < b.createdAt ? 1:-1
        }
        else if(sortBy==="amount"){
            return a.amount < b.amount ? 1:-1
        }
    })

}
const expenseReducer = (state=expenseReducerDefault,action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
        return [...state,action.expense];
        case "REMOVE_EXPENSE":
        return state.filter(({id})=> id !== action.id)
        case "EDIT_EXPENSE":
        return state.map((item)=>{
            if(item.id===action.id){
                return {
                    ...item,
                    ...action.updates
                }
            }
            else{
                return item
            }
        })  
        default:
        return state
            }
    
}


const filterReducerDefault = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined

}

const filterReducer = (state=filterReducerDefault,action)=>{
     switch(action.type){
        case "SET_TEXT_FILTER":
        return {
            ...state,
            text:action.text
        }
        case "SORT_BY_AMOUNT":
        return {
            ...state,
            sortBy:'amount'
        }
        case "SORT_BY_DATE":
        return {
            ...state,
            sortBy:'date'
        }
        case "SET_START_DATE":
        return {
            ...state,
            startDate:action.startDate
        }
          case "SET_END_DATE":
        return {
            ...state,
            endDate:action.endDate
        }
        default:
        return state
            }

}

const store = createStore(combineReducers({
    expenses:expenseReducer,
    filter:filterReducer
}))

store.subscribe(()=>{
    const state = store.getState()
    console.log(state)
    const visible = visibleExpenses(state.expenses,state.filter)
    console.log(visible)

})

// const addExpense1 = store.dispatch(addExpense())

const addExpense2 = store.dispatch(addExpense({
    description:"rent",
    note:"this is the first test",
    amount:7000,
    createdAt:2
}))

const addExpense1 = store.dispatch(addExpense({
    description:"rent2",
    note:"this is the first test2",
    amount:4000,
    createdAt:0
}))

// store.dispatch(removeExpense({
//     id:addExpense1.expense.id
// }))

// store.dispatch(editExpense(
//     addExpense2.expense.id,
//     {description:"second"}
//     ));



store.dispatch(setTextFilter('re'))

// store.dispatch(sortByDate())


store.dispatch(setStartDate(-144))
// store.dispatch(setStartDate())

store.dispatch(setEndDate(154))

// store.dispatch(setEndDate())
// store.dispatch(setEndDate())
// const demoState = {
//     expenses:[{
//         id:"klndflknfd",
//         description:"this is first epfknrk",
//     }],
//     filter:{
//         text:'',
//         sortBy:'date' //amt
//         startdate:undefined,
//         enddate:undefined
//     }
// }

store.dispatch(sortByAmount())

