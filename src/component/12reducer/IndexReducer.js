import {TaskAppWithoutReducer, TaskAppWithReducer} from "./TaskListReducer";
import BackButton from "../BackButton";

export default function IndexReducer() {
    return (
        <>
            <BackButton/>
            <h1>12. Reducer</h1>
            <h3>a. Without reducer</h3>
            <TaskAppWithoutReducer/>
            <h3>a. With reducer</h3>
            <TaskAppWithReducer/>
        </>
    );
}
