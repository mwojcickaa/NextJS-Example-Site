export const normalizePrice = (price: number) => {
    const roundPrice = Math.round(price * 100) / 100
    const decimalPlacesPrice = roundPrice.toFixed(2);
    return decimalPlacesPrice.replace(".", ',')
}