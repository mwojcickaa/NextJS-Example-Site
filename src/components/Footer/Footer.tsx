import React from 'react'
import { Box, Grid, Link } from '@mui/material'
import Image from "@/components/Image/Image"
import style from './Footer.module.sass'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <Grid
            component="footer"
            container
            className={style.grid}
        >
            <Image
                alt="Company logo in footer"
                src="/logo.png"
            />
            <Box
                className={style.vertical_line}
            />
            <Box>
                <Box
                    component="nav"
                >
                    <Link>O nas</Link>
                    <Link>Regulamin</Link>
                    <Link>Prywatność</Link>
                    <Link>Reklamacje</Link>
                </Box>
                <Box
                    className={style.company}
                >
                    &#169; {currentYear} Fine Spices CO.
                </Box>
            </Box>
        </Grid>
    )
}