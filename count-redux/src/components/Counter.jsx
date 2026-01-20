import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    render(){
        const { count, dispatch } = this.props;
        return(
            <div id='counter'>
                <p>Clicked: {count} times</p>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>

                <button onClick={() => {
                    if (Math.abs(count) % 2 === 1) {
                        dispatch({ type: 'INCREMENT' });
                    } else {
                        console.log('Number is even');
                    }
                }}>Increment if odd</button>

                <button onClick={() => {
                    setTimeout(() => dispatch({ type: 'INCREMENT' }), 1000);
                }}>Increment if async</button>
            </div>
        )
    }
}
// MAP THE state.count DIRECTLY TO this.props.count
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
export default connect(mapStateToProps)(Counter)