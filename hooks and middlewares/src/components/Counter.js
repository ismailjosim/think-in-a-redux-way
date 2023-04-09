import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';

export const Counter = ({ count, increment, decrement }) => {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{ count }</div>
            <div className="flex space-x-3">
                <button
                    onClick={ decrement }
                    className="bg-red-400 text-white px-3 py-2 rounded shadow">
                    Decrement
                </button>
                <button
                    onClick={ increment }
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow">
                    Increment
                </button>

            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    return {
        count: state.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Counter)
// ? Higher Order component and after called() we passed Counter as parameter.

