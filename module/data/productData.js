
module.exports = 
(rawProductData) => {
    productData = {
        "productIdx": rawProductData.productIdx,
        "name": rawProductData.name,
        "price": rawProductData.price,
        "count": rawProductData.count
    }
    return productData;
}
