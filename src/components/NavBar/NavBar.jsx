import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">CarAccessories</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/Performance" className="nav-link" activeClassName="active">Performance</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/BodyKits" className="nav-link" activeClassName="active">Body Kits</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/Accesorios" className="nav-link" activeClassName="active">Accesorios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/Llantas" className="nav-link" activeClassName="active">Llantas</NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
