import React, {useCallback, useState} from 'react';

/**
 * Use callback component.
 *
 * @returns {JSX.Element}
 */
export const UseCallbackComponent = () => {
    const [count, setCount] = useState(0);

    const handleIncreaseCount = () => {
        setCount(count + 1);
    }

    const handleShowAlert = useCallback(() => {
        alert('Button Clicked !!');
    }, []);

    return (
        <div>
            <h3>Welcome to the Use Callback Component !! Count is {count}</h3>
            <button onClick={handleIncreaseCount}>Increase Count</button>
            <br/>
            <br/>
            <button onClick={handleShowAlert}>Show Alert</button>
        </div>
    );
}
