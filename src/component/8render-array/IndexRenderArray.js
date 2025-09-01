import {CounterList, RenderAddArray, RenderDeleteArray, ShapeEditor} from "./RenderArray";
import BackButton from "../BackButton";

export default function IndexRenderArray() {
    return (
        <>
            <BackButton/>
            <h1>8. array state change</h1>
            <RenderAddArray/>
            <RenderDeleteArray/>
            <ShapeEditor/>
            <CounterList/>
        </>
    );
}
