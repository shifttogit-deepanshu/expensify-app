import database from "../firebase/firebase"
export const addExpense = (expense)=>(
    {   type:"ADD_EXPENSE",
        expense
    }

)

export const startAddExpense = (expenseData = {})=>{
    return (dispatch)=>{
        const {
            description='',
            note='',
            amount=0,
            createdAt=0
        }=expenseData
        const expense = {description,note,amount,createdAt};
    return database.ref('expenses').push(expense).then((ref)=>{
        dispatch(addExpense({
            id:ref.key,
            ...expense
        }))
    })
    }
}

export const removeExpense = ({id=0}={})=>(
    {
        type:"REMOVE_EXPENSE",
        id
    }
)

export const editExpense = (id,updates)=>({
    type:"EDIT_EXPENSE",
    id,
    updates
})

export const setExpense = (expenses)=>({
    type:"SET_EXPENSE",
    expenses
})

export const startSetExpense=()=>{
    return (dispatch)=>{
        return database.ref('expenses').once('value').then((snapshot)=>{
            const expenses = []
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                   id: childSnapshot.key,
                   ...childSnapshot.val()
                })
            })
            dispatch(setExpense(expenses))
        })
    }
}