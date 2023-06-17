import React from 'react'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import style from './TableHeader.module.sass'

export default function TableHeader() {
    return (
        <TableHead>
            <TableRow>
                <TableCell
                    className={`${style.header} ${style.left}`}
                >
                    Product
                </TableCell>
                <TableCell className={style.header}>Price</TableCell>
                <TableCell className={style.header}>Quantity</TableCell>
                <TableCell className={style.header}>Total</TableCell>
                <TableCell className={style.header}></TableCell>
            </TableRow>
        </TableHead>
    )
}
