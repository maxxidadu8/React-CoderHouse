import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, getTotal, totalQuantity } = useCart();
    const total = getTotal();

    if (totalQuantity === 0) {
        return <h1 className="text-center">El carrito está vacío</h1>;
    }

    return (
        <div className="container">
            <h1 className="text-center">Cart</h1>
            {cart.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
            <h3 className="text-center">Total: {total}</h3>
            <div className="text-center">
                <button className="btn btn-danger" onClick={() => clearCart()}>
                    Limpiar Carrito
                </button>
            </div>
            <div className="text-center">
                <Link to="/checkout" className="btn btn-primary">
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;
