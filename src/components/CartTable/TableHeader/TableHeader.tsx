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
                    Produkt
                </TableCell>
                <TableCell className={style.header}>Cena</TableCell>
                <TableCell className={style.header}>Ilość</TableCell>
                <TableCell className={style.header}>Cena końcowa</TableCell>
                <TableCell className={style.header}></TableCell>
            </TableRow>
        </TableHead>
    )
}
