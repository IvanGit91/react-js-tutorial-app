import './App.css';
import {NavLink} from "react-router";


function App() {

    return (
        <div className="main">
            <NavLink to="samples" end> 1. Samples </NavLink>
            <NavLink to="conditional" end> 2. Conditional </NavLink>
            <NavLink to="list" end> 3. List </NavLink>
            <NavLink to="events" end> 4. Events </NavLink>
            <NavLink to="state" end> 5. State </NavLink>
            <NavLink to="render" end> 6. Render </NavLink>
            <NavLink to="render-object" end> 7. Render Object</NavLink>
            <NavLink to="render-array" end> 8. Render Array</NavLink>
            <NavLink to="state-management" end> 9. State Management</NavLink>
            <NavLink to="state-component" end> 10. State Between Component</NavLink>
            <NavLink to="preserving-state" end> 11. Preserving State</NavLink>
            <NavLink to="reducer" end> 12. Reducer</NavLink>
            <NavLink to="context" end> 13. Context</NavLink>
            <NavLink to="context-reducer" end> 14. Context and Reducer</NavLink>
            <NavLink to="use-ref" end> 15. UseRef</NavLink>
            <NavLink to="use-effect" end> 16. UseEffect</NavLink>
            <NavLink to="effect-event" end> 17. Effect and Event</NavLink>
            <NavLink to="custom-hook" end> 18. Custom Hooks</NavLink>
            <NavLink to="hook-form" end> 19. React Hook Form</NavLink>
        </div>
    );
}

export default App;