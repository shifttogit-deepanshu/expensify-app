import React from 'react'
import ExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilters"

const ExpenseDashboardPage = ()=>{
    return <div>
    <h2>This is ExpenseDashboardPage</h2>
    <ExpenseListFilters />
    <ExpenseList />
    </div> 
}

export default ExpenseDashboardPage;