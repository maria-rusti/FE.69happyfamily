export const calculateTotalPrice = (products) => {
    let totalPrice = 0;
    products.map((product) => {
        totalPrice = totalPrice + product.price * product.quantity;

    })
    return totalPrice;
}