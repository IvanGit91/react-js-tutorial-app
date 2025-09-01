import Toolbar from "./Toolbar";
import Toolbar2 from "./Toolbar2";
import EventPropagationToolbar from "./EventPropagationToolbar";
import EventStopPropagationToolbar from "./EventStopPropagationToolbar";
import BackButton from "../BackButton";

export default function IndexEvents() {
    function MyButtonEvent() {
        function handleClick() {
            alert('You clicked me!');
        }

        return (
            <button onClick={handleClick}>
                Click me
            </button>
        );
    }
    return (
        <>
            <BackButton/>
            <h1>4. Events</h1>
            <h3>a.</h3>
            <MyButtonEvent/>
            <h3>b. inline events</h3>
            <button onClick={function handleClick() {
                alert('You clicked me!');
            }}> button
            </button>
            <h3>c. inline events, arrow function</h3>
            <button onClick={() => {
                alert('You clicked me!');
            }}> button arrow
            </button>
            <h3>d.</h3>
            <Toolbar/>
            <h3>e.</h3>
            <Toolbar2
                onPlayMovie={() => alert('Playing!')}
                onUploadImage={() => alert('Uploading!')}
            />
            <h3>f. event propagation</h3>
            <EventPropagationToolbar/>
            <h3>g. event STOP propagation</h3>
            <EventStopPropagationToolbar/>
        </>
    );
}
