import React, {useState} from 'react';

/**
 * Use state component.
 *
 * @returns {JSX.Element}
 */
export const UseStateComponent = () => {
    const [count, setCount] = useState(0);

    const handleIncreaseCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h3>Welcome to the Use State Component !! Count is {count}</h3>
            <button onClick={handleIncreaseCount}>Increase Count</button>
        </div>
    );
}
