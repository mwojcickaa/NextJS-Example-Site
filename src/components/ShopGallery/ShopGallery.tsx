import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import ShopItemCard from './ShopItemCard/ShopItemCard'
import style from './ShopGallery.module.sass'


export default function ShopGallery() {

    return (
        <Grid className={style.grid}>
            <ShopItemCard
                title="Test"
                description="test test abc 123 atrac 123 asdada sadsad aasd ad a"
                price={10.99}
                quantityAvailable={3}
                preview="/CorianderSeeds.png"
            ></ShopItemCard>
            <ShopItemCard
                title="Test"
                description="test test abc 123 atrac 123 asdada sadsad aasd ad a"
                price={10.1}
                quantityAvailable={5}
                preview="/CorianderSeeds.png"
            ></ShopItemCard>
            <ShopItemCard
                title="Test"
                description="test test abc 123 atrac 123 asdada sadsad aasd ad a"
                price={10.1}
                quantityAvailable={1}
                preview="/CorianderSeeds.png"
            ></ShopItemCard>
            <ShopItemCard
                title="Test"
                description="test test abc 123 atrac 123 asdada sadsad aasd ad a"
                price={10.1}
                quantityAvailable={1}
                preview="/CorianderSeeds.png"
            ></ShopItemCard>
            <ShopItemCard
                title="Test"
                description="test test abc 123 atrac 123 asdada sadsad aasd ad a"
                price={10.1}
                quantityAvailable={1}
                preview="/CorianderSeeds.png"
            ></ShopItemCard>
            <ShopItemCard
                title="Test"
                description="test test abc 123 atrac 123 asdada sadsad aasd ad a"
                price={10.1}
                quantityAvailable={1}
                preview="/CorianderSeeds.png"
            ></ShopItemCard>
            <ShopItemCard
                title="Test"
                description="test test abc 123 atrac 123 asdada sadsad aasd ad a"
                price={10.1}
                quantityAvailable={1}
                preview="/CorianderSeeds.png"
            ></ShopItemCard>
        </Grid>
    )
}