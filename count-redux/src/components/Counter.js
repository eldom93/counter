import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    onIncrement(){
        return {
            type: 'INCREMENT'
        }
    }
    onDecrement(){
        return {
            type: 'DECREMENT'
        }
    }
    render(){
        //const count = this.props.count
        return(
            <div id='counter'>
                <h3>{this.props.state.state.count}</h3>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>Increment if odd</button>
                <button onClick={this.onIncrement}>Increment if async</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps)(Counter)