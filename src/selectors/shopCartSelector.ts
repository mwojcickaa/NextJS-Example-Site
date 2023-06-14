export const getCartItems = (state: ShopCartItemsState) => state.selected

export const countQuantityInShopCartItems = (items: Array<ShopCartItem>) =>
    items.reduce((n, { quantity }) => n + quantity, 0)

export const compareCartItemsWithShopItems = (cartItems: ShopCartItemsState, shopItems: ShopItemsState) => {
    let result: Array<CombinedShopCartItems> = []

    cartItems.selected.forEach(ci => {
        let item1 = shopItems.items.filter(sf => ci.id == sf.id)
        result.push({ ...item1[0], quantity: ci.quantity })
    });

    return result
}

export const getSelectedItem = (shopCartItems: ShopCartItemsState, id: number) =>
    shopCartItems.selected.find(e => e.id == id)
