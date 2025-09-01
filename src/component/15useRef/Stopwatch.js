import { useState, useRef } from 'react';

// refs	                                                                                state
// useRef(initialValue) returns { current: initialValue }	                            useState(initialValue) returns the current value of a state variable and a state setter function ( [value, setValue])
// Doesn’t trigger re-render when you change it.	                                    Triggers re-render when you change it.
// Mutable—you can modify and update current’s value outside of the rendering process.	”Immutable”—you must use the state setting function to modify state variables to queue a re-render.
// You shouldn’t read (or write) the current value during rendering.	                You can read state at any time. However, each render has its own snapshot of state which does not change.

export default function Stopwatch() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
        </>
    );
}
