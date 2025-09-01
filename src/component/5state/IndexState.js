import StateGallery from "./StateGallery";
import RenderForm from "../6render/RenderForm";
import {FakeCounter, FakeCounter2} from "../6render/FakeCounter";
import RenderForm2 from "../6render/RenderForm2";
import {useState} from "react";
import BackButton from "../BackButton";

// Hooks - use 5state
// Often, you’ll want your component to “remember” some information and display it. For example,
// maybe you want to count the number of times a button is clicked. To do this, add 5state to your component.
function MyButtonState() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

// Functions starting with use are called Hooks. useState is a built-in Hook provided by React.
// You can find other built-in Hooks in the API reference. You can also write your own Hooks by combining the existing ones.

function MyButtonVars({count, onClick}) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

export default function IndexState() {
    // Passing variables to components
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <BackButton/>
            <h1>5. Hooks - Use State and Render</h1>
            <h3>a.</h3>
            <MyButtonState/>
            <MyButtonState/>
            <h3>b.</h3>
            <StateGallery/>
            <h3>c.</h3>
            <MyButtonVars count={count} onClick={handleClick}/>
            <MyButtonVars count={count} onClick={handleClick}/>
            <h3>d. setIsSent(true); call a render</h3>
            <RenderForm/>
            <h3>e. Fake counter, increment only by one</h3>
            <FakeCounter/>
            <h3>f. Fake counter with timeout</h3>
            <FakeCounter2/>
            <h3>g. Form</h3>
            <RenderForm2/>
        </>
    );
}
