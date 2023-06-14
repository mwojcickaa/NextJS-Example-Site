import React from 'react'
import { Box } from '@mui/material'
import Image from "@/components/Image/Image"
import style from './Banner.module.sass'


export default function Banner(props: BannerProps) {
    return (
        <Box
            component="div"
            className={style.box}
        >
            <Image
                alt={props.alt}
                src={props.src}
                className={props.className || ""}
            />
        </Box>
    )
}