import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Item = ({ id, name, img, category, price }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <img className="card-img-top" src={img} alt={name} style={{ maxWidth: "100%", height: "auto" }} />
                <p className="card-text">Precio: $ {price}</p>
                <p className="card-text">Categoría: {category}</p>
                <Link to={`/detail/${id}`} className="btn btn-primary">
                    Ver Detalle
                </Link>
            </div>
        </div>
    );
};

export default Item;
