import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <nav style={styles.nav}>
        <h1 style={styles.logo}>Mate Haus</h1>

        <ul style={styles.links}>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>

        <CartWidget />
        </nav>
    )
}

export default NavBar

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#ffffffff",
        color: "black"
    },
    logo: {
        fontSize: "24px",
    },
    links: {
        listStyle: "none",
        display: "flex",
        gap: "20px"
    }
}

