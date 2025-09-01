import {UpdaterCounter, UpdaterCounter2} from "./UpdaterCounter";
import BackButton from "../BackButton";

export default function IndexRender() {
    return (
        <>
            <BackButton/>
            <h1>6. State change - Updater function</h1>
            <h3>a. updater function </h3>
            <UpdaterCounter/>
            <h3>b. updater function 2 with state and function </h3>
            <UpdaterCounter2/>
        </>
    );
}
