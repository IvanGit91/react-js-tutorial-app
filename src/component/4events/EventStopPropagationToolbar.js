function EventStopPropagationButton({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

export default function EventStopPropagationToolbar() {
    return (
        <div className="Toolbar" onClick={() => {
            alert('You clicked on the toolbar!');
        }}>
            <EventStopPropagationButton onClick={() => alert('Playing!')}>
                Play Movie
            </EventStopPropagationButton>
            <EventStopPropagationButton onClick={() => alert('Uploading!')}>
                Upload Image
            </EventStopPropagationButton>
        </div>
    );
}