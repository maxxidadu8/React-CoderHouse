import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from "../../context/CartContext";

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useCart();
    const handleRemove = (id) => {
        removeItem(id);
    };

    return (
        <div className="card mb-3">
            <div className="card-header">
                <h5 className="card-title">{name}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">Cantidad: {quantity}</p>
                <p className="card-text">Precio por unidad: $ {price}</p>
            </div>
            <div className="card-footer">
                <p className="card-text">Subtotal: $ {price * quantity}</p>
                <button className="btn btn-danger" onClick={() => handleRemove(id)}>
                    X
                </button>
            </div>
        </div>
    );
};

export default CartItem;
