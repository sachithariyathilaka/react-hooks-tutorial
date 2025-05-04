import React, {useReducer} from 'react';

/**
 * Use reducer component.
 *
 * @returns {JSX.Element}
 */
export const UseReducerComponent = () => {
    const initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>Welcome to the Use Reducer Component !! Count is {state.count}</h3>
            <button onClick={() => dispatch({ type: 'increment'})}>Increase Count</button>
            <br/><br/>
            <button onClick={() => dispatch({ type: 'decrement'})}>Decrease Count</button>
        </div>
    );
}
