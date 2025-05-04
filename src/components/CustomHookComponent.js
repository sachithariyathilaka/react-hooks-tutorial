import {useToggle} from "../hooks/toggle";

/**
 * Custom hook component.
 *
 * @returns {JSX.Element}
 */
export const CustomHookComponent = () => {
    const [toggle, setToggle] = useToggle(false);

    return (
        <div>
            <h3>Welcome to the Custom Hook Component !! Toggle value is {toggle ? 'Open' : 'Close'}</h3>
            <button onClick={setToggle}>Toggle</button>
        </div>
    );
}
