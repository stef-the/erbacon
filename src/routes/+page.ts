// src/routes/+page.js - For page-specific data
export function load({ params, fetch }) {
    // You can use fetch to get data from an API
    // Or directly return data objects
    return {
        pageTitle: "Welcome to our site",
        products: [
            { id: 1, name: "Product 1", price: 99.99 },
            { id: 2, name: "Product 2", price: 149.99 },
            { id: 3, name: "Product 3", price: 199.99 }
        ]
    };
}