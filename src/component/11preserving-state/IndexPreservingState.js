import PreservingCounterConditional from "./PreservingCounterConditional";
import PreservingFancyCounter from "./PreservingFancyCounter";
import PreservingMessenger from "./PreservingMessenger";
import BackButton from "../BackButton";

export default function IndexPreservingState() {
    return (
        <>
            <BackButton/>
            <h1>11. Preserving state</h1>
            <h3>a. Counter conditional rendering</h3>
            <PreservingCounterConditional/>
            <h3>b. Fancy Styling</h3>
            <PreservingFancyCounter/>
            <h3>c. Messenger</h3>
            <PreservingMessenger/>
        </>
    );
}
