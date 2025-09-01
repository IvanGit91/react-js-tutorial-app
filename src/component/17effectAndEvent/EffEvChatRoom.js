import { useState, useEffect } from 'react';
import { createConnection, sendMessage } from './chat.js';

const serverUrl = 'https://localhost:1234';

// Event handlers only re-run when you perform the same interaction again.
// Unlike event handlers, Effects re-synchronize if some value they read, like a prop or a state variable, is different from what it was during the last render.
// Sometimes, you also want a mix of both behaviors: an Effect that re-runs in response to some values but not others.

// Logic inside event handlers is not reactive
// Logic inside Effects is reactive
function ChatRoom({ roomId }) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    function handleSendClick() {
        sendMessage(message);
    }

    return (
        <>
            <h1>Welcome to the {roomId} room!</h1>
            <input value={message} onChange={e => setMessage(e.target.value)} />
            <button onClick={handleSendClick}>Send</button>
        </>
    );
}

export default function EffEvChatRoom() {
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);
    return (
        <>
            <label>
                Choose the chat room:{' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)}>
                {show ? 'Close chat' : 'Open chat'}
            </button>
            {show && <hr />}
            {show && <ChatRoom roomId={roomId} />}
        </>
    );
}
