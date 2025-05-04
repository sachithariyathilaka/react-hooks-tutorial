import React, {useEffect, useState} from 'react';

/**
 * Use effect component.
 *
 * @returns {JSX.Element}
 */
export const UseEffectComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = parseInt(localStorage.getItem('count'));
        setCount(isNaN(storedCount) ? 0 : storedCount);
    }, []);

    useEffect(() => {
        localStorage.setItem('count', count.toString());
    }, [count]);

    const handleIncreaseCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h3>Welcome to the Use Effect Component !! Count is {count}</h3>
            <button onClick={handleIncreaseCount}>Increase Count</button>
        </div>
    );
}
