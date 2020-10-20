import React from "react"

import ReactDOM from "react-dom"

const Info = (props)=>(
    <div>
    <h1>INFO</h1>
    <p>Information is {props.isInfo}</p>
    </div>

)

const WithWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
        <p>This is he warning!!</p>
        <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuthenticated ? (<div><Info {...props}/></div>):(<div><p>Please login to see</p></div>)}
        </div>
        
    )
}

const Warningcomp1 = WithWarning(Info)
const AuthInfo = requireAuthenticaytion(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} isInfo="My name is Deepanshu"/>,document.getElementById('approot'))