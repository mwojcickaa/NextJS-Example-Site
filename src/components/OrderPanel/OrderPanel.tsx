import { Box, Typography } from "@mui/material"
import { toast } from "react-toastify"
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
    const normalizedDeliveryPrice = normalizePrice(fullPrice + 20)
    const notify = () => toast.warn("Obecnie niedostępne");

    return (
        <Box className={style.box}>
            <Typography
                className={style.tittle}
                variant="h2"
            >
                Twoje zamówienie
            </Typography>
            <Box className={style.description}>
                <Box
                    className={style.quantity}>
                    Kwota
                    <span>{normalizedPrice} zł</span>
                </Box>
                <Box className={style.shipment}>
                    Opłata za wysyłkę
                    <span>20,00 zł</span>
                </Box>
                <Box
                    className={style.code}
                    onClick={notify}
                >
                    Dodaj kod promocyjny
                    <ArrowForwardIcon />
                </Box>
            </Box>
            <Box
                className={style.total}>
                Łącznie
                <span>{normalizedDeliveryPrice}</span>
            </Box>
            <button>Zapłać</button>
        </Box >
    )
}