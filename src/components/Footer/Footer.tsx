import React from 'react'
import { toast } from 'react-toastify'
import { Box, Grid, Link } from '@mui/material'
import Image from 'next/image'
import style from './Footer.module.sass'


export default function Footer(props: FooterProps) {
    const currentYear = new Date().getFullYear()
    const { logoAlt, logoSrc } = props
    const notify = () => toast.warn("Currently unavailable");

    return (
        <Grid
            component="footer"
            container
            className={style.grid}
        >
            <Box className={style.img}>
                <Image
                    fill
                    alt={props.logoAlt}
                    src={props.logoSrc}
                />
            </Box>
            <Box
                className={style.vertical_line}
            />
            <Box>
                <Box
                    component="nav"
                >
                    <Link onClick={notify}>About</Link>
                    <Link onClick={notify}>Statute</Link>
                    <Link onClick={notify}>Privacy</Link>
                    <Link onClick={notify}>Complaints</Link>
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