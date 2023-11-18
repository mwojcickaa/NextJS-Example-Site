import { useRef } from "react"
import { Box, Typography } from "@mui/material"
import { Id, toast } from "react-toastify"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import style from './OrderPanel.module.sass'
import { useStoreSelector } from "@/hooks/useStore"
import { getFullPrice } from "@/selectors/shopCartSelector"
import { normalizePrice } from "@/functions/price"


export default function OrderPanel() {
    const cartItems = useStoreSelector((state) => state.cartItems)
    const shopItems = useStoreSelector((state) => state.shopItems)
    const fullPrice = getFullPrice(cartItems, shopItems)
    const normalizedPrice = normalizePrice(fullPrice)
    const normalizedDeliveryPrice = normalizePrice(fullPrice + 10)
    const disabledButtonByt = fullPrice == 0 ? true : false
    const toastId = useRef<Id>()

    const notify = () => {
        toast.dismiss(toastId.current)
        toastId.current = toast.warn("Currently unavailable")
    }

    return (
        <Box className={style.box}>
            <Typography
                className={style.tittle}
                variant="h2"
            >
                Order Summary
            </Typography>
            <Box className={style.description}>
                <Box
                    className={style.quantity}>
                    Subtotal
                    <span>${normalizedPrice}</span>
                </Box>
                <Box className={style.shipment}>
                    Shipping
                    <span>$10,00</span>
                </Box>
                <Box
                    className={style.code}
                    onClick={notify}
                >
                    Add coupon code
                    <ArrowForwardIcon />
                </Box>
            </Box>
            <Box
                className={style.total}>
                Total
                <span>${normalizedDeliveryPrice}</span>
            </Box>
            <button
                onClick={notify}
                disabled={disabledButtonByt}
            >
                Buy
            </button>
        </Box >
    )
}