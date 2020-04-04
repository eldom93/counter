import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    onIncrement(){
        console.log('onIncrement Called')
        return {
            type: 'INCREMENT'
        }
    }
    onDecrement(){
        console.log('onDecrement Called')
        return {
            type: 'DECREMENT'
        }
    }
    render(){
        //const count = this.props.count
        return(
            <div id='counter'>
                <p>Clicked: {this.props.state.state.count} times</p>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={e => this.props.state.state.count % 2 === 0 || this.props.state.state.count < 0 & this.props.state.state.count % 2 !== 0 ? (this.onIncrement) : (console.log('number is even '))}>Increment if odd</button>
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