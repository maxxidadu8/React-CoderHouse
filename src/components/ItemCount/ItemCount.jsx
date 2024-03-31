import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1);
        }
    };

    return (
        <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" onClick={decrement}>-</button>
            <input type="text" className="form-control text-center" value={count} readOnly />
            <button className="btn btn-outline-secondary" type="button" onClick={increment}>+</button>
            <div className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;
