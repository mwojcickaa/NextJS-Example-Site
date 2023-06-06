import React, { useContext } from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Box } from "@mui/material"
import style from './CartWithNumber.module.sass'

export default function CartWithNumber() {
    const counter = 1

    return (
        <Box className={style.box}>
            <ShoppingCartIcon
                fontSize="large"
                className={style.icon} />
            <Box className={style.counter}>
                {counter}
            </Box>
        </Box>
    )
}
