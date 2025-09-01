import Login from "./login";
import NotLogin from "./NotLogin";
import Item from "./Item";
import BackButton from "../BackButton";

export default function IndexConditional() {
    // Conditional rendering
    const isLoggedIn = true
    let content;
    if (isLoggedIn) {
        content = <Login/>;
    } else {
        content = <NotLogin/>;
    }

    return (
        <>
            <BackButton/>
            <h1>2. Conditional Rendering</h1>
            <h3>a.</h3>
            <div>
                {content}
            </div>
            {/*compact mode*/}
            <h3>b.</h3>
            <div>
                {isLoggedIn ? (
                    <Login/>
                ) : (
                    <NotLogin/>
                )}
            </div>
            <h3>c.</h3>
            {/*without else*/}
            <div>
                {isLoggedIn && <Login/>}
            </div>
            <h3>d.</h3>
            <section>
                <h1>Sally Ride's Packing List</h1>
                <ul>
                    <Item
                        isPacked={true}
                        name="Space suit"
                    />
                    <Item
                        isPacked={true}
                        name="Helmet with a golden leaf"
                    />
                    <Item
                        isPacked={false}
                        name="Photo of Tam"
                    />
                </ul>
            </section>
        </>
    );
}
