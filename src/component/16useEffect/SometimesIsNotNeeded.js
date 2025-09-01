import {useEffect, useMemo, useState, useSyncExternalStore} from "react";

// You Might Not Need an Effect

// 1. Updating state based on props or state
function Sample1WithEffect() {
    const [firstName, setFirstName] = useState('Taylor');
    const [lastName, setLastName] = useState('Swift');

    // 🔴 Avoid: redundant state and unnecessary Effect
    const [fullName, setFullName] = useState('');
    useEffect(() => {
        setFullName(firstName + ' ' + lastName);
    }, [firstName, lastName]);
    // ...
}
// to avoid re-rendering, can become
function Sample1WithoutEffect() {
    const [firstName, setFirstName] = useState('Taylor');
    const [lastName, setLastName] = useState('Swift');
    // ✅ Good: calculated during rendering
    const fullName = firstName + ' ' + lastName;
    // ...
}

// 2. Caching expensive calculations
function getFilteredTodos(todos, filter) {
    return undefined;
}

function Sample2WithEffect({ todos, filter }) {
    const [newTodo, setNewTodo] = useState('');

    // 🔴 Avoid: redundant state and unnecessary Effect
    const [visibleTodos, setVisibleTodos] = useState([]);
    useEffect(() => {
        setVisibleTodos(getFilteredTodos(todos, filter));
    }, [todos, filter]);

    // ...
}
// can become
function Sample2WithoutEffect({ todos, filter }) {
    const [newTodo, setNewTodo] = useState('');
    // ✅ This is fine if getFilteredTodos() is not slow.
    const visibleTodos = getFilteredTodos(todos, filter);
    // ...
}
// getFilteredTodos() is slow or you have a lot of todos.
// In that case you don’t want to recalculate getFilteredTodos() if some unrelated state variable like newTodo has changed.
function Sample2WithMemo({ todos, filter }) {
    const [newTodo, setNewTodo] = useState('');
    // ✅ Does not re-run getFilteredTodos() unless todos or filter change
    const visibleTodos = useMemo(() => getFilteredTodos(todos, filter), [todos, filter]);
    // ...
}

// 3. Resetting all state when a prop changes
export function Sample3WithEffect({ userId }) {
    const [comment, setComment] = useState('');

    // 🔴 Avoid: Resetting state on prop change in an Effect
    useEffect(() => {
        setComment('');
    }, [userId]);
    // ...
}
// can become
export function Sample3WithoutEffect({ userId }) {
    return (
        <Profile
            userId={userId}
            key={userId}
        />
    );
}

function Profile({ userId }) {
    // ✅ This and any other state below will reset on key change automatically
    const [comment, setComment] = useState('');
    // ...
}

// 4. Adjusting some state when a prop changes
function Sample4WithEffect({ items }) {
    const [isReverse, setIsReverse] = useState(false);
    const [selection, setSelection] = useState(null);

    // 🔴 Avoid: Adjusting state on prop change in an Effect
    useEffect(() => {
        setSelection(null);
    }, [items]);
    // ...
}
// can become
function Sample4WithoutEffect({ items }) {
    const [isReverse, setIsReverse] = useState(false);
    const [selection, setSelection] = useState(null);

    // Better: Adjust the state while rendering
    const [prevItems, setPrevItems] = useState(items);
    if (items !== prevItems) {
        setPrevItems(items);
        setSelection(null);
    }
    // ...
}


// 5. Sharing logic between event handlers
function showNotification(s) {}
function navigateTo(s) {}

function Sample5WithEffect({ product, addToCart }) {
    // 🔴 Avoid: Event-specific logic inside an Effect
    useEffect(() => {
        if (product.isInCart) {
            showNotification(`Added ${product.name} to the shopping cart!`);
        }
    }, [product]);

    function handleBuyClick() {
        addToCart(product);
    }

    function handleCheckoutClick() {
        addToCart(product);
        navigateTo('/checkout');
    }
    // ...
}
// can become
function Sample5WithoutEffect({ product, addToCart }) {
    // ✅ Good: Event-specific logic is called from event handlers
    function buyProduct() {
        addToCart(product);
        showNotification(`Added ${product.name} to the shopping cart!`);
    }

    function handleBuyClick() {
        buyProduct();
    }

    function handleCheckoutClick() {
        buyProduct();
        navigateTo('/checkout');
    }
    // ...
}

// 6. Sending a POST request
function post(s, param2) {}
function Sample6WithEffect() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // ✅ Good: This logic should run because the component was displayed
    useEffect(() => {
        post('/analytics/event', { eventName: 'visit_form' });
    }, []);

    // 🔴 Avoid: Event-specific logic inside an Effect
    const [jsonToSubmit, setJsonToSubmit] = useState(null);
    useEffect(() => {
        if (jsonToSubmit !== null) {
            post('/api/register', jsonToSubmit);
        }
    }, [jsonToSubmit]);

    function handleSubmit(e) {
        e.preventDefault();
        setJsonToSubmit({ firstName, lastName });
    }
    // ...
}
// can become
function Sample6WithoutEffect() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // ✅ Good: This logic runs because the component was displayed
    useEffect(() => {
        post('/analytics/event', { eventName: 'visit_form' });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        // ✅ Good: Event-specific logic is in the event handler
        post('/api/register', { firstName, lastName });
    }
    // ...
}

// 7. Chains of computations
function Sample7WithEffect() {
    const [card, setCard] = useState(null);
    const [goldCardCount, setGoldCardCount] = useState(0);
    const [round, setRound] = useState(1);
    const [isGameOver, setIsGameOver] = useState(false);

    // 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
    useEffect(() => {
        if (card !== null && card.gold) {
            setGoldCardCount(c => c + 1);
        }
    }, [card]);

    useEffect(() => {
        if (goldCardCount > 3) {
            setRound(r => r + 1)
            setGoldCardCount(0);
        }
    }, [goldCardCount]);

    useEffect(() => {
        if (round > 5) {
            setIsGameOver(true);
        }
    }, [round]);

    useEffect(() => {
        alert('Good game!');
    }, [isGameOver]);

    function handlePlaceCard(nextCard) {
        if (isGameOver) {
            throw Error('Game already ended.');
        } else {
            setCard(nextCard);
        }
    }
    // ...
}
// can become
function Sample7WithoutEffect() {
    const [card, setCard] = useState(null);
    const [goldCardCount, setGoldCardCount] = useState(0);
    const [round, setRound] = useState(1);

    // ✅ Calculate what you can during rendering
    const isGameOver = round > 5;

    function handlePlaceCard(nextCard) {
        if (isGameOver) {
            throw Error('Game already ended.');
        }

        // ✅ Calculate all the next state in the event handler
        setCard(nextCard);
        if (nextCard.gold) {
            if (goldCardCount <= 3) {
                setGoldCardCount(goldCardCount + 1);
            } else {
                setGoldCardCount(0);
                setRound(round + 1);
                if (round === 5) {
                    alert('Good game!');
                }
            }
        }
    }

// ...
}


// 8. Initializing the application
function loadDataFromLocalStorage() {}
function checkAuthToken() {}

function Sample8WithEffect() {
    // 🔴 Avoid: Effects with logic that should only ever run once
    useEffect(() => {
        loadDataFromLocalStorage();
        checkAuthToken();
    }, []);
    // ...
}
// can become
let didInit = false;

function Sample8WithoutEffect() {
    useEffect(() => {
        if (!didInit) {
            didInit = true;
            // ✅ Only runs once per app load
            loadDataFromLocalStorage();
            checkAuthToken();
        }
    }, []);
    // ...
}
// or can become
if (typeof window !== 'undefined') { // Check if we're running in the browser.
    // ✅ Only runs once per app load
    checkAuthToken();
    loadDataFromLocalStorage();
}

function Sample8WithoutEffect2() {
    // ...
}


// 9. Notifying parent components about state changes
function isCloserToRightEdge(e) {
    return false;
}

function Sample9WithEffect({ onChange }) {
    const [isOn, setIsOn] = useState(false);

    // 🔴 Avoid: The onChange handler runs too late
    useEffect(() => {
        onChange(isOn);
    }, [isOn, onChange])

    function handleClick() {
        setIsOn(!isOn);
    }

    function handleDragEnd(e) {
        if (isCloserToRightEdge(e)) {
            setIsOn(true);
        } else {
            setIsOn(false);
        }
    }

    // ...
}
// ->
function Sample9WithoutEffect({ onChange }) {
    const [isOn, setIsOn] = useState(false);

    function updateToggle(nextIsOn) {
        // ✅ Good: Perform all updates during the event that caused them
        setIsOn(nextIsOn);
        onChange(nextIsOn);
    }

    function handleClick() {
        updateToggle(!isOn);
    }

    function handleDragEnd(e) {
        if (isCloserToRightEdge(e)) {
            updateToggle(true);
        } else {
            updateToggle(false);
        }
    }

    // ...
}

// 10. Passing data to the parent
function Sample10WithEffectParent() {
    const [data, setData] = useState(null);
    // ...
    return <Sample10WithEffectChild onFetched={setData} />;
}

function useSomeAPI() {
    return undefined;
}
function Sample10WithEffectChild({ onFetched }) {
    const data = useSomeAPI();
    // 🔴 Avoid: Passing data to the parent in an Effect
    useEffect(() => {
        if (data) {
            onFetched(data);
        }
    }, [onFetched, data]);
    // ...
}
// ->
function Sample10WithoutEffectParent() {
    const data = useSomeAPI();
    // ...
    // ✅ Good: Passing data down to the child
    return <Sample10WithoutEffectChild data={data} />;
}

function Sample10WithoutEffectChild({ data }) {
    // ...
}

// 11. Subscribing to an external store
function useOnlineStatus11() {
    // Not ideal: Manual store subscription in an Effect
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        function updateState() {
            setIsOnline(navigator.onLine);
        }

        updateState();

        window.addEventListener('online', updateState);
        window.addEventListener('offline', updateState);
        return () => {
            window.removeEventListener('online', updateState);
            window.removeEventListener('offline', updateState);
        };
    }, []);
    return isOnline;
}

function Sample11WithEffect() {
    const isOnline = useOnlineStatus11();
    // ...
}
// ->
function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    };
}
// Although it’s common to use Effects for this, React has a purpose-built Hook for subscribing to an external store that is preferred instead. Delete the Effect and replace it with a call to useSyncExternalStore:
function useOnlineStatus() {
    // ✅ Good: Subscribing to an external store with a built-in Hook
    return useSyncExternalStore(
        subscribe, // React won't resubscribe for as long as you pass the same function
        () => navigator.onLine, // How to get the value on the client
        () => true // How to get the value on the server
    );
}

function Sample11WithoutEffect() {
    const isOnline = useOnlineStatus();
    // ...
}


// 12. Fetching data
function fetchResults(query, page) {}
function Sample12({ query }) {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // 🔴 Avoid: Fetching without cleanup logic
        fetchResults(query, page).then(json => {
            setResults(json);
        });
    }, [query, page]);

    function handleNextPageClick() {
        setPage(page + 1);
    }
    // ...
}
// To fix the race condition, you need to add a cleanup function to ignore stale responses:
function Sample12Improved({ query }) {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        let ignore = false;
        fetchResults(query, page).then(json => {
            if (!ignore) {
                setResults(json);
            }
        });
        return () => {
            ignore = true;
        };
    }, [query, page]);

    function handleNextPageClick() {
        setPage(page + 1);
    }
    // ...
}
// If you don’t use a framework (and don’t want to build your own) but would like to make data fetching from Effects more ergonomic, consider extracting your fetching logic into a custom Hook like in this example:
function Sample12ImprovedAPI({ query }) {
    const [page, setPage] = useState(1);
    const params = new URLSearchParams({ query, page });
    const results = useData(`/api/search?${params}`);

    function handleNextPageClick() {
        setPage(page + 1);
    }
    // ...
}

function useData(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        let ignore = false;
        fetch(url)
            .then(response => response.json())
            .then(json => {
                if (!ignore) {
                    setData(json);
                }
            });
        return () => {
            ignore = true;
        };
    }, [url]);
    return data;
}