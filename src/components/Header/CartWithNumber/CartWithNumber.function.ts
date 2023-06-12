export const countQuantityInShopCartItems = (shopCartItems: ShopCartItemsState) => {
    if (shopCartItems.selected.length == 0)
        return 0
    return shopCartItems.selected.reduce((n, { quantity }) => n + quantity, 0)
}
