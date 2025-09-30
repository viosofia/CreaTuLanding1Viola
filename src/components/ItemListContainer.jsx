function ItemListContainer({ greeting }) {
    return (
        <div style={{ 
        ...styles.container, 
        backgroundColor: "#ffffff", 
        color: "#000000", 
        minHeight: "80vh",
        padding: "20px"
        }}>
        <h2>{greeting}</h2>
        </div>
    );
}

export default ItemListContainer;

const styles = {
    container: {
        marginTop: "40px",
        textAlign: "center",
        fontSize: "1.5em",
    },
};
