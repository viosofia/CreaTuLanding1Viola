function ItemListContainer({ greeting }) {
    return (
        <section style={styles.container}>
        <h2>{greeting}</h2>
        </section>
    )
}

export default ItemListContainer

const styles = {
    container: {
        padding: "20px",
        textAlign: "center"
    }
}
