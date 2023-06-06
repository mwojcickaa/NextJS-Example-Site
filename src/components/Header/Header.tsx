import React from "react"
import { Grid } from "@mui/material"
import Image from "@/components/Image/Image"
import CartWithNumber from "./CartWithNumber/CartWithNumber"
import style from './Header.module.sass'

export default function Header() {
    return (
        <Grid
            component="header"
            container
            className={style.grid}
        >
            <Image
                alt="Company logo in header"
                src="/logo.png"
            />
            <CartWithNumber />
        </Grid>
    )
}