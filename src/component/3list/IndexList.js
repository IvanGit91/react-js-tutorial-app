import ShoppingList from "./ShoppingList";
import Person from "./Person";
import BackButton from "../BackButton";

export default function IndexList() {
    // lists
    const products = [
        {title: 'Cabbage', id: 1},
        {title: 'Garlic', id: 2},
        {title: 'Apple', id: 3},
    ];
    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );

    // Not Pure Function
    let guest = 0;

    function CupNotPure() {
        // Bad: changing a preexisting variable!
        guest = guest + 1;
        return <h2>Tea cup for guest #{guest}</h2>;
    }

    // Pure Function
    // Minds its own business. It does not change any objects or variables that existed before it was called.
    // Same inputs, same output. Given the same inputs, a pure function should always return the same result.
    function CupPure({guest}) {
        return <h2>Tea cup for guest #{guest}</h2>;
    }

    return (
        <>
            <BackButton/>
            <h1>3. List management</h1>
            <h3>a.</h3>
            <ShoppingList/>
            <h3>b.</h3>
            <Person/>
            <h3>c. pure functions</h3>
            <CupPure guest={1}/>
            <CupPure guest={2}/>
            <CupPure guest={3}/>
            <h3>d.</h3>
            <ul> {listItems} </ul>
        </>
    );
}
