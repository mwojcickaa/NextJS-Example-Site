import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from '@/store/store'
import { Box, Typography } from "@mui/material"
import Header from "@/components/Header/Header"
import CartTable from "@/components/CartTable/CartTable"
import OrderPanel from "@/components/OrderPanel/OrderPanel"
import style from './index.module.sass'


export default function Cart() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Header
                    logoAlt="Company logo in header"
                    logoSrc="/logo.png"
                />
                <main className={style.main}>
                    <Typography
                        variant="h1"
                        className={style.order_title}
                    >
                        Twój koszyk
                    </Typography>
                    <Box className={style.order_panel}>
                        <CartTable />
                        <OrderPanel />
                    </Box>
                </main>
            </PersistGate>
        </Provider>
    )
}
