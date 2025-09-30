import { products } from "./products";

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products);
        }, 500);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.find((p) => p.id === parseInt(id)));
        }, 500);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.filter((p) => p.category === category));
        }, 500);
    });
};

