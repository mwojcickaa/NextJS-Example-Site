import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Box } from "@mui/material"
import { useStoreSelector } from '@/hooks/useStore'
import style from './CartWithNumber.module.sass'

export default function CartWithNumber() {
    const countQuantity = useStoreSelector((state) =>
    state.cartItems.selected.length)

    return (
        <Box className={style.box}>
            <ShoppingCartIcon
                fontSize="large"
                className={style.icon} />
            <Box className={style.counter}>
                {countQuantity}
            </Box>
        </Box>
    )
}




