import React from 'react'
import { default as MuiTableBody } from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import CancelIcon from '@mui/icons-material/Cancel'
import { Box } from '@mui/material'
import Image from '@/components/Image/Image'
import { useStoreDispatch, useStoreSelector } from '@/hooks/useStore'
import { remove } from '@/reducers/shopCartReducer'
import { getRowsData } from './TableBody.function.ts'
import style from './TableBody.module.sass'

const CustomTableCell = ({ text }: CustomTableCellProps) => {
    return <TableCell className={style.row}>
        {text}
    </TableCell>
}

export default function TableBody() {
    const dispatch = useStoreDispatch()
    const cartItems = useStoreSelector((state) => state.shopCart)
    const shopItems = useStoreSelector((state) => state.shopItems)
    const rows = getRowsData(cartItems, shopItems)

    const handleOnClick = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <MuiTableBody>
            {rows.map((row) => (
                <TableRow
                    key={row.id}
                >
                    <TableCell className={`${style.row} ${style.left}`}>
                        <Box className={style.product}>
                            <Image
                                src="/shop/FenneSeeds.png"
                                alt="test" />
                            <Box className={style.description}>
                                {row.title}
                                <span>1 kg</span>
                            </Box>
                        </Box>
                    </TableCell>
                    <CustomTableCell text={`${row.price} zł`} />
                    <CustomTableCell text={row.quantity} />
                    <CustomTableCell text={`${row.price * row.quantity} zł`} />
                    <TableCell className={`${style.row}`}>
                        <CancelIcon
                            onClick={() => handleOnClick(row.id)}
                        />
                    </TableCell>
                </TableRow>
            ))}
        </MuiTableBody>
    )
}

