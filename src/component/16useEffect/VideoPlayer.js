import { useState, useRef, useEffect } from 'react';

// However, the browser <video> tag does not have an isPlaying prop.
// The only way to control it is to manually call the play() and pause() methods on the DOM element.
// You need to synchronize the value of isPlaying prop, which tells whether the video should currently be playing, with calls like play() and pause().

function VideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);

    // By default, Effects run after every render.
    useEffect(() => {
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [isPlaying]); // it should skip re-running your Effect if isPlaying is the same as it was during the previous render.

    return <video ref={ref} src={src} loop playsInline />;
}

export default function VideoPlayerApp() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    );
}