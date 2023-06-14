import React from 'react'
import Table from '@mui/material/Table'
import TableHeader from './TableHeader/TableHeader'
import TableBody from './TableBody/TableBody'
import style from './CartTable.module.sass'
import { useStoreDispatch, useStoreSelector } from '@/hooks/useStore'
import { remove } from '@/reducers/shopCartReducer'
import { compareCartItemsWithShopItems } from '@/selectors/shopCartSelector'


export default function CartTable() {
    const dispatch = useStoreDispatch()
    const cartItems = useStoreSelector((state) => state.cartItems)
    const shopItems = useStoreSelector((state) => state.shopItems)
    const rows = compareCartItemsWithShopItems(cartItems, shopItems)

    const handleOnClick = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <Table className={style.table}>
            <TableHeader />
            <TableBody
                rows={rows}
                handleOnClick={handleOnClick}
            />
        </Table>
    )
}