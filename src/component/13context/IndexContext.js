import {PageContext, PageContextImplicitLevel} from "./PageContext";
import BackButton from "../BackButton";

export default function IndexContext() {
    return (
        <>
            <BackButton/>
            <h1>13. Context</h1>
            <h3>a. </h3>
            <PageContext/>
            <h3>a. implicit</h3>
            <PageContextImplicitLevel/>
        </>
    );
}
