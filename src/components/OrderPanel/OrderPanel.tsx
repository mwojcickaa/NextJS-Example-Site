import { Box, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import style from './OrderPanel.module.sass'

export default function OrderPanel() {
    return (
        <Box className={style.grid}>
            <Typography
                className={style.tittle}
                variant="h2"
            >
                Twoje zamówienie
            </Typography>
            <Box className={style.description}>
                <Box
                    className={style.quantity}>
                    Kwota
                    <span>300.00 zł</span>
                </Box>
                <Box className={style.shipment}>
                    Opłata za wysyłkę
                    <span>300.00 zł</span>
                </Box>
                <Box className={style.code}>
                    Dodaj kod promocyjny
                    <ArrowForwardIcon />
                </Box>
            </Box>
            <Box
                className={style.total}>
                Łącznie
                <span>300.00 zł</span>
            </Box>
            <button>Zapłać</button>
        </Box >
    )
}