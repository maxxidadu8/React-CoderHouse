import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.svg"; 

const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <Link to="/cart" className="btn btn-primary CartWidget">
            <img
                src={cart}
                style={{ width: 20 }}
                alt="cart-widget"
                className='CartImg me-1'
            />
            {totalQuantity}
        </Link>
    );
};

export default CartWidget;



