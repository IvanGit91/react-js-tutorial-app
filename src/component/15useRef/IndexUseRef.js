import Stopwatch from "./Stopwatch";
import FocusTextInput from "./FocusTextInput";
import ScrollIntoCat from "./ScrollIntoCat";
import FromParentToChild from "./FromParentToChild";
import BackButton from "../BackButton";

export default function IndexUseRef() {
    return (
        <>
            <BackButton/>
            <h1>15. UseRef</h1>
            <h3>a. to clear interval</h3>
            <Stopwatch/>
            <h3>b. to focus input</h3>
            <FocusTextInput/>
            <h3>c. to scroll</h3>
            <ScrollIntoCat/>
            <h3>d. pass ref from parent to child</h3>
            <FromParentToChild/>
        </>
    );
}
