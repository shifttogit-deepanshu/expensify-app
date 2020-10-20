import React from 'react'

import {BrowserRouter,Route, Switch} from 'react-router-dom'
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import HelpPage from "../components/HelpPage";



const AppRouter = ()=>{
return (
    <BrowserRouter>
    <Header />
    <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </BrowserRouter>
)
}
export default AppRouter;