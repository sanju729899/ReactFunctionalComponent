import React from 'react'

export default class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            count: 0            
        }
    } 
    counterFunc = ()=>{
        this.setState({count: this.state.count+1})
    }
    render(){
        return(
            <div>
                <button onClick={this.counterFunc}>Click Me!!</button>
                Count : {this.state.count}
            </div>
        )
    }
}
