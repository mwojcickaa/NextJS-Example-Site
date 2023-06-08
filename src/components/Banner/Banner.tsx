import React from 'react'
import { Box } from '@mui/material'
import Image from "@/components/Image/Image"
import style from './Banner.module.sass'


export default function Banner() {
    return (
        <Box
            component="div"
            className={style.box}
        >
            <Image
                alt="Banner image. Three spoons with spices"
                src="/banner.jpg"
                className={style.imgStyle}
            />
        </Box>
    )
}