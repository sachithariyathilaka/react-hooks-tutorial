import React, {useMemo, useState} from 'react';

/**
 * Use memo component.
 *
 * @returns {JSX.Element}
 */
export const UseMemoComponent = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const calculatedValue = useMemo(() => {
        return number * number;
    }, [number])

    const handleIncreaseCount = () => {
        setCount(count + 1);
    }

    const handleCalculate = () => {
        setNumber(count);
    }

    return (
        <div>
            <h3>Welcome to the Use Callback Component !! Count is {count} and calculated value is {calculatedValue}</h3>
            <button onClick={handleIncreaseCount}>Increase Count</button>
            <br/>
            <br/>
            <button onClick={handleCalculate}>Calculate</button>
        </div>
    );
}
