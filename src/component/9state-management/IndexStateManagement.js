import FormManagement from "./FormManagement";
import GroupState from "./GroupState";
import ContradictionState from "./ContradictionState";
import RedundantState from "./RedundantState";
import DuplicationState from "./DuplicationState";
import NestedState from "./NestedState";
import BackButton from "../BackButton";

export default function IndexStateManagement() {
    return (
        <>
            <BackButton/>
            <h1>9. State management</h1>
            <h3>a. </h3>
            <FormManagement/>
            <h3>b. group state</h3>
            <GroupState/>
            <h3>c. Avoid contradiction state</h3>
            <ContradictionState/>
            <h3>d. Avoid Redundant state</h3>
            <RedundantState/>
            <h3>e. Avoid duplication in state</h3>
            <DuplicationState/>
            <h3>f. Avoid complex Nested state</h3>
            <NestedState/>
        </>
    );
}
