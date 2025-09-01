import { LevelContext } from './LevelContext.js';
import {useContext} from "react";

export default function SectionImplicit({ children }) {
    const level = useContext(LevelContext);
    return (
        <section className="section">
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}
