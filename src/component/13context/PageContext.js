import Heading from './Heading.js';
import Section from './Section.js';
import SectionImplicit from "./SectionImplicit";

export function PageContext() {
    return (
        <Section level={1}>
            <Heading>Title</Heading>
            <Section level={2}>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Section level={3}>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Section level={4}>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}

// Since context lets you read information from a component above, each Section could read the level from the Section above, and pass level + 1 down automatically.
// Here is how you could do it:
export function PageContextImplicitLevel() {
    return (
        <SectionImplicit>
            <Heading>Title</Heading>
            <SectionImplicit>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <SectionImplicit>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <SectionImplicit>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                    </SectionImplicit>
                </SectionImplicit>
            </SectionImplicit>
        </SectionImplicit>
    );
}
