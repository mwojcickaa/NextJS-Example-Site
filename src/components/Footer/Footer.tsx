import React from 'react'
import { toast } from 'react-toastify'
import { Box, Grid, Link } from '@mui/material'
import Image from "@/components/Image/Image"
import style from './Footer.module.sass'


export default function Footer(props: FooterProps) {
    const currentYear = new Date().getFullYear()
    const { logoAlt, logoSrc } = props
    const notify = () => toast.warn("Obecnie niedostępne");

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
                    <Link onClick={notify}>O nas</Link>
                    <Link onClick={notify}>Regulamin</Link>
                    <Link onClick={notify}>Prywatność</Link>
                    <Link onClick={notify}>Reklamacje</Link>
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