import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import Small from "./Small";

export const Memorize = () => {
    const [show, setShow] = useState(true);
    const { counter, increment } = useCounter(10);

    return (
        <div className="container">
            <h1>Counter: <Small value={counter} /></h1>
            <hr />
            <button className="btn btn-primary me-2" onClick={increment}>+1</button>
            <button className="btn btn-secondary" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    );
};
