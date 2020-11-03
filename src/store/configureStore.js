import {createStore,combineReducers,applyMiddleware,compose} from "redux"

import expenseReducer from  "../reducers/expenses"

import filterReducer from "../reducers/filter"
import thunk from "redux-thunk"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default ()=>{
    const store = createStore(combineReducers({
        expenses:expenseReducer,
        filter:filterReducer,
        
    }),
    composeEnhancer(applyMiddleware(thunk))
    // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )
    return store
}

