import React from 'react'
import { Box, Grid, Link } from '@mui/material'
import Image from "@/components/Image/Image"
import style from './Footer.module.sass'

export default function Footer(props: FooterProps) {
    const currentYear = new Date().getFullYear()
    const { logoAlt, logoSrc } = props

    return (
        <Grid
            component="footer"
            container
            className={style.grid}
        >
            <Image
                alt={logoAlt}
                src={logoSrc}
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