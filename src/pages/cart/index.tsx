import Header from "@/components/Header/Header"
import { Box, Typography } from "@mui/material"
import CartTable from "@/components/CartTable/CartTable"
import style from './index.module.sass'

export default function Cart() {
    return (
        <>
            <Header />
            <main>
                <Typography
                    variant="h1"
                    className={style.order_title}
                >
                    Twój koszyk
                </Typography>
                <Box className={style.order_panel}>
                    <CartTable />
                </Box>
            </main>
        </>
    )
}