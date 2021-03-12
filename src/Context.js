import React, { Component } from 'react'
const Context = React.createContext()
const reducer = (prevState,action)=>{

    switch (action.type){
        
        case "REMOVE":
            return { todos: prevState.todos.filter(todo => todo.id !== action.payload)}
        default:
            return prevState
        }

}
export  class Provider extends Component {
    state={
        todos:[
            {
                id:1,
                title:"Check email",
                complete:false
            },
            {
                id:2,
                title:"Doing exercise",
                complete:false
            },
            {
                id:3,
                title:"Food preparation",
                complete:false
            }

        ],
         dispatch : (action) => this.setState( prevState => reducer ( prevState,action))
    }
    render() {
        return (
            <div>
                <Context.Provider value={this.state}>
                    {
                    this.props.children
                    }
                </Context.Provider>
            </div>
        )
    }
}
export const Consumer=Context.Consumer