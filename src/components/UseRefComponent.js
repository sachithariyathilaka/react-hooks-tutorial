import React, {useEffect, useRef, useState} from 'react';

/**
 * Use ref component.
 *
 * @returns {JSX.Element}
 */
export const UseRefComponent = () => {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);
    const buttonRef = useRef(null);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        buttonRef.current.click();
    }, []);

    const handleIncreaseCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h3>Welcome to the Use Ref Component !! Count is {count} and Render count is {renderCount.current}</h3>
            <button ref={buttonRef} onClick={handleIncreaseCount}>Increase Count</button>
        </div>
    );
}
