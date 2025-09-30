import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/mockAPI";
import ProductCard from "../ProductCard";

function ItemListContainer({ greeting }) {
    const { category } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
        if (category) {
            setItems(data.filter((p) => p.category === category));
        } else {
            setItems(data); 
        }
        });
    }, [category]);

    const categoryTitles = {
        mates: "Mates",
        bombillas: "Bombillas",
        materas: "Materas"
    };

    const title = category ? categoryTitles[category] || "Categoría" : greeting;

    return (
        <div style={{ backgroundColor: "#ffffff", color: "#000", padding: "20px" }}>
        <h2>{title}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {items.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
    );
}

export default ItemListContainer;



