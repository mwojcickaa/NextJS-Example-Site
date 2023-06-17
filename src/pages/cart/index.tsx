import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ToastContainer } from "react-toastify"
import { store, persistor } from '@/store/store'
import { Box, Typography } from "@mui/material"
import Header from "@/components/Header/Header"
import CartTable from "@/components/CartTable/CartTable"
import OrderPanel from "@/components/OrderPanel/OrderPanel"
import 'react-toastify/dist/ReactToastify.css'
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
                        Your Cart
                    </Typography>
                    <Box className={style.order_panel}>
                        <CartTable />
                        <OrderPanel />
                    </Box>
                </main>

                <ToastContainer
                    position="top-left"
                    autoClose={1750}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    theme="light"
                />
            </PersistGate>
        </Provider>
    )
}
