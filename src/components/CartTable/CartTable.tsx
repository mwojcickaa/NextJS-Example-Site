import React from 'react'
import Table from '@mui/material/Table'
import TableHeader from './TableHeader/TableHeader'
import TableBody from './TableBody/TableBody'
import style from './CartTable.module.sass'


export default function CartTable() {
    return (
        <Table className={style.table}>
            <TableHeader />
            <TableBody />
        </Table>
    )
}