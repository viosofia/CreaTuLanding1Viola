// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/mockAPI";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProductById(id).then((prod) => {
        setProduct(prod);
        setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <p style={{ textAlign: "center", marginTop: "50px" }}>Cargando producto...</p>;
    }

    if (!product) {
        return <p style={{ textAlign: "center", marginTop: "50px" }}>Producto no encontrado</p>;
    }

    return (
        <div style={styles.container}>
        <img
            src={product.image}
            alt={product.name}
            style={styles.image}
        />
        <div style={styles.info}>
            <h2>{product.name}</h2>
            <p style={styles.price}>${product.price}</p>
            <p style={styles.description}>{product.description}</p>
            <ButtonAddToCart product={product} />
        </div>
        </div>
    );
    }

    const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
        minHeight: "80vh",
        backgroundColor: "#ffffff",
        color: "#000000",
    },
    image: {
        maxWidth: "300px",
        width: "100%",
        height: "auto",
        borderRadius: "8px",
        marginBottom: "20px",
    },
    info: {
        textAlign: "center",
    },
    price: {
        fontSize: "1.5em",
        fontWeight: "bold",
        margin: "10px 0",
    },
    description: {
        margin: "10px 0",
        fontSize: "1em",
    },
    category: {
        margin: "10px 0",
        fontStyle: "italic",
    },
};

