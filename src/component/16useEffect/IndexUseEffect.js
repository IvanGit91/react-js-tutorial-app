import VideoPlayerApp from "./VideoPlayer";
import MountComponent from "./MountComponent";
import ChatRoomApp from "./ChatRoom";
import BackButton from "../BackButton";

export default function IndexUseEffect() {
    return (
        <>
            <BackButton/>
            <h1>16. UseEffect</h1>
            <h3>a. </h3>
            <VideoPlayerApp/>
            <h3>b. </h3>
            <MountComponent/>
            <h3>c. lifecycle </h3>
            <ChatRoomApp/>
        </>
    );
}
