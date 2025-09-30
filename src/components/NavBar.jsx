import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav style={styles.nav}>
        <h1 style={styles.logo}>Mate Haus</h1>

        <ul style={styles.links}>
            <li><Link to="/" style={styles.link}>Inicio</Link></li>
            <li><Link to="/productos" style={styles.link}>Productos</Link></li>
            <li><Link to="/ofertas" style={styles.link}>Ofertas</Link></li>
            <li><Link to="/contacto" style={styles.link}>Contacto</Link></li>
        </ul>

        <CartWidget />
        </nav>
    );
}

export default NavBar;

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 50px",  
        backgroundColor: "#000000", 
        color: "#ffffff",
        width: "100%", 
        boxSizing: "border-box" 
    },
    logo: {
        fontSize: "24px",
        color: "#ffffff"
    },
    links: {
        listStyle: "none",
        display: "flex",
        gap: "20px",
        margin: 0, 
        padding: 0
    },
    link: {
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: "500"
    }
};
