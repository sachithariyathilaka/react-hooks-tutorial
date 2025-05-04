import {UseStateComponent} from "../components/UseStateComponent";
import {UseEffectComponent} from "../components/UseEffectComponent";
import {UseRefComponent} from "../components/UseRefComponent";
import {UseReducerComponent} from "../components/UseReducerComponent";
import {UseCallbackComponent} from "../components/UseCallbackComponent";
import {UseMemoComponent} from "../components/UseMemoComponent";
import {CustomHookComponent} from "../components/CustomHookComponent";

import '../index.css';

/**
 * Home page of the application.
 *
 * @returns {JSX.Element}
 */
export const HomePage = () => {
    return (
        <div className={'center-align'}>

            <h1>Use State Component</h1>
            <UseStateComponent/>

            <h1>Use Effect Component</h1>
            <UseEffectComponent/>

            <h1>Use Ref Component</h1>
            <UseRefComponent/>

            <h1>Use Reducer Component</h1>
            <UseReducerComponent/>

            <h1>Use Callback Component</h1>
            <UseCallbackComponent/>

            <h1>Use Memo Component</h1>
            <UseMemoComponent/>

            <h1>Custom Hook Component</h1>
            <CustomHookComponent/>
        </div>
    );
}
