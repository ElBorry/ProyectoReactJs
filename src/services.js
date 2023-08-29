const products = [
    { id: "1", name: "Samsung S 23 Ultra", price: 899, category: "phones", description: "datos"},
    { id: "2", name: "Samsung S 23", price: 899, category: "phones", description: "datos"},
    { id: "3", name: "Samsung S 22 Ultra", price: 899, category: "phones", description: "datos"},
    { id: "4", name: "Samsung Tab S 22", price: 899, category: "tablets", description: "datos"},
    { id: "5", name: "Samsung Tab S 23", price: 899, category: "tablets", description: "datos"},
    { id: "6", name: "Samsung Tab S 23 Ultra", price: 899, category: "tablets", description: "datos"},
    { id: "7", name: "Samsung Notebook S 23", price: 899, category: "notebooks", description: "datos"},
    { id: "8", name: "Samsung Notebook S 23 Ultra", price: 899, category: "notebooks", description: "datos"},
    { id: "9", name: "Samsung Notebook S 22", price: 899, category: "notebooks", description: "datos"},
];

// getProduct
export const getProduct = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === id);
            if(product){
                resolve(product);
            }else{
                reject("No existe el producto");
            }
        }, 1000);
    });
};


// getProducts
export const getProducts = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            const productsFiltered = category 
            ? products.filter((product) => product.category === category) 
            : products;
            resolve(productsFiltered);
        }, 1000);
    });
};