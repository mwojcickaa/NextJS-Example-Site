import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import ShopItemCard from './ShopItemCard/ShopItemCard'
import style from './ShopGallery.module.sass'


export default function ShopGallery() {
    const [shopData, setShopData] = useState<Array<ShopItem>>([])

    useEffect(() => {
        fetch('/api/shop')
            .then((res) => res.json())
            .then((data) => {
                setShopData(data)
            })
    }, [])

    return (
        <Grid className={style.grid}>
            {
                shopData.map((item) => (
                    <ShopItemCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        price={Number(item.price)}
                        quantityAvailable={Number(item.quantityAvailable)}
                        preview={item.preview}
                    ></ShopItemCard>
                ))
            }
        </Grid>
    )
}