type ShopCartItem = {
    id: number,
    quantity: number
}

type ShopCartItemsState =  {
    selected: Array<ShopCartItem>
}

type ShopItemsState = {
    items: Array<ShopItem>
}