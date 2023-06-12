export const getRowsData = (cartItems: ShopCartItemsState, shopItems: ShopItemsState) => {
    return compareCartItemsWithShopItems(cartItems, shopItems)
}

export const compareCartItemsWithShopItems = (cartItems: ShopCartItemsState, shopItems: ShopItemsState) => {
    let result: Array<CombinedShopCartItems> = []

    cartItems.selected.forEach(ci => {
        let item1 = shopItems.items.filter(sf => ci.id == sf.id)
        result.push({ ...item1[0], quantity: ci.quantity })
    });

    return result
}