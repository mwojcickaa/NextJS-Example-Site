export const getDefaultQuantity = (shopCartItems: ShopCartItem | undefined) => {
    return shopCartItems?.quantity || 1
}

export const getSelectedItem = (shopCartItems: ShopCartItemsState, id: number) => {
    return shopCartItems.selected.find(e => e.id == id)
}