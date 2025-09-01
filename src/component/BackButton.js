import {NavLink} from "react-router";

export default function BackButton() {
    return (
        <div>
            <NavLink to="/" end> Go to main menu</NavLink>
        </div>
    );
}
