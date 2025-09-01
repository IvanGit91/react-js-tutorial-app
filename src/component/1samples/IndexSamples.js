import ProfileShort from "./ProfileShort";
import Gallery from "./Gallery";
import Profile2 from "./Profile2";
import BackButton from "../BackButton";

// React apps are made out of components.
// A component is a piece of the UI (user interface) that has its own logic and appearance.
// A component can be as small as a button, or as large as an entire page.
// React components are JavaScript functions that return markup:
function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br/>How do you do?</p>
        </>
    );
}

export default function IndexSamples() {
    return (
        <>
            <BackButton/>
            <h1>1. Sample components</h1>
            <h3>a.</h3>
            <MyButton/>
            <h3>b.</h3>
            <AboutPage/>
            <h3>c.</h3>
            <Gallery/>
            <h3>d.</h3>
            <Profile2/>
            <h3>e.</h3>
            <ProfileShort/>
        </>
    );
}
