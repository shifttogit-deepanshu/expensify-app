import {createStore} from 'redux'

const increment = ({incrementBy=1}={})=>({
    type:"INCREMENT",
    incrementBy
})

const decrement = ({decrementBy=1}={})=>({
    type:"DECREMENT",
    decrementBy

})

const reset = ({resetBy=0}={})=>({
    type:"RESET",
    resetBy
})

const reducer = (state={count:0},action)=>{
    switch(action.type){
        case "INCREMENT":
        return {
            count: state.count + action.incrementBy
        }
        case "DECREMENT":
        return {
            count: state.count - action.decrementBy
        }
        case "RESET":
        return {
            count:action.resetBy
        }


    }

}

const store = createStore(reducer)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(increment({incrementBy:5}))

store.dispatch(increment())

store.dispatch(decrement({decrementBy:5}))



store.dispatch(decrement({decrementBy:4}))
