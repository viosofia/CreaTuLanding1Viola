import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="nav-menu">
        {/* Logo fijo, sin link */}
        <img
            src="https://raw.githubusercontent.com/viosofia/CreaTuLanding1Viola/main/src/assets/Marca%20icono.jpg"
            alt="Mate Haus"
            className="nav-logo"
        />
        
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

