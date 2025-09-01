import {useState} from "react";

// Here, n => n + 1 is called an updater function. When you pass it to a 5state setter:
// React queues this function to be processed after all the other code in the event handler has run.
// During the next 6render, React goes through the queue and gives you the final updated 5state.
export function UpdaterCounter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}>+3</button>
        </>
    )
}

// setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
// setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
// setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.

export function UpdaterCounter2() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 5);
                setNumber(n => n + 1);
            }}>Increase the number</button>
        </>
    )
}

// React stores 6 as the final result and returns it from useState.