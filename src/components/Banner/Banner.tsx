import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import style from './Banner.module.sass'


export default function Banner(props: BannerProps) {
    return (
        <Box
            component="div"
            className={style.box}
        >
            <Image
                fill
                alt={props.alt}
                src={props.src}
                className={props.className || ""}
            />
        </Box>
    )
}