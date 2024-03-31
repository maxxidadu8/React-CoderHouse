import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'; 
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../context/Notification";

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
    const { addItem, isInCart } = useCart();
    const { setNotification } = useNotification();

    const handleAdd = (count) => {
        console.log("Agregar al carrito");
        const productObj = {
            id, name, price, quantity: count
        };
        addItem(productObj);
        setNotification("success", `Se agregaron ${count} de ${name}`);
    };

    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={name} style={{ width: "100%" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Categoría: {category}</p>
                <p className="card-text">Descripción: {description}</p>
                <p className="card-text">Precio: {price}</p>
                <footer>
                    {isInCart(id) ? (
                        <Link to="/cart" className="btn btn-primary">Ir al carrito</Link>
                    ) : (
                        <ItemCount onAdd={handleAdd} stock={stock} />
                    )}
                </footer>
            </div>
        </div>
    );
};

export default ItemDetail;

