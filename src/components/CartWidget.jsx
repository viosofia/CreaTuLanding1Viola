function CartWidget() {
    return (
        <div style={styles.cart}>
        🛒 <span style={styles.count}>0</span>
        </div>
    );
}

export default CartWidget;

const styles = {
    cart: {
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        cursor: "pointer",
        color: "#ffffff", 
        backgroundColor: "#1a1a1a", 
        padding: "5px 10px",
        borderRadius: "8px",
    },
    count: {
        marginLeft: "5px",
        fontWeight: "bold",
    },
};
