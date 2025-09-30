// src/components/NavBar/NavBar.jsx
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="nav-menu">
        <Link to="/">
            <p className="nav-logo">Mate Haus</p>
        </Link>
        <ul className="nav-links">
            <Link to="/"><li>Inicio</li></Link>
            <Link to="/category/mates"><li>Mates</li></Link>
            <Link to="/category/bombillas"><li>Bombillas</li></Link>
            <Link to="/category/materas"><li>Materas</li></Link>
        </ul>
        <div className="nav-cart">
            <Link to="/cart">
            <CartWidget />
            </Link>
        </div>
        </nav>
    );
}

