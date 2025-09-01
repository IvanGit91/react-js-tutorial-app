import StatusBarSample from "./StatusBarSample";
import InputFormSample from "./InputFormSample";
import ChatRoomSample from "./ChatRoomSample";
import BackButton from "../BackButton";

export default function IndexCustomHook() {
    return (
        <>
            <BackButton/>
            <h1>18. Custom hooks</h1>
            <h3>a. </h3>
            <StatusBarSample/>
            <h3>b. </h3>
            <InputFormSample/>
            <h3>c. </h3>
            <ChatRoomSample/>
        </>
    );
}
