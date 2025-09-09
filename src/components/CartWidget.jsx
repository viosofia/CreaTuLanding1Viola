function CartWidget() {
    return (
        <div style={styles.cart}>
        🛒 <span style={styles.count}>0</span>
        </div>
    )
}

export default CartWidget

const styles = {
    cart: {
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        cursor: "pointer"
    },
    count: {
        marginLeft: "5px",
        fontWeight: "bold"
    }
}
