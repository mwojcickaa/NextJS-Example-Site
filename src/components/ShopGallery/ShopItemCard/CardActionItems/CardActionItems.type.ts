type CardActionItemsProps = {
    quantity: number
    quantityAvailable: number
    disableButton: boolean
    setQuantity: (quantity: number) => void
    handleOnClick: () => void
}