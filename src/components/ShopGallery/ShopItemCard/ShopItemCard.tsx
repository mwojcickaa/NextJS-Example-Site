import React, { useState } from "react"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useStoreDispatch, useStoreSelector } from '@/hooks/useStore'
import { add } from '@/reducers/shopCartReducer'
import style from "./ShopItemCard.module.sass"
import CardActionItems from "./CardActionItems/CardActionItems"
import { getSelectedItem } from "@/selectors/shopCartSelector"


export default function ShopItemCard(props: ShopItemCardProps) {
    const selectedShopCart = useStoreSelector(e => getSelectedItem(e.cartItems, props.id))
    const [quantity, setQuantity] = useState(() => getDefaultQuantity(selectedShopCart))
    const dispatch = useStoreDispatch()

    const handleOnClick = () => {
        const payload = {
            id: props.id,
            quantity: quantity
        }
        dispatch(add(payload))
    }

    return (
        <Card className={style.card}>
            <CardMedia
                className={style.img}
                image={props.preview}
                title="Seeds image"
            />
            <CardContent
                className={style.card_content}
            >
                <Typography
                    gutterBottom
                    variant="h3"
                >
                    {props.title}
                </Typography>
                <Typography
                    gutterBottom
                    variant="body1"
                    color="text.secondary"
                >
                    {props.description}
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    className={style.price}
                >
                    {props.price} zł
                </Typography>
            </CardContent>
            <CardActions>
                {
                    props.quantityAvailable == 0
                        ?
                        <Typography
                            gutterBottom
                            variant="body1"
                            color="text.secondary"
                            className={style.sold_out}
                        >
                            Chwilowo wyprzedane
                        </Typography>
                        :
                        <CardActionItems
                            quantity={quantity}
                            quantityAvailable={props.quantityAvailable}
                            disableButton={selectedShopCart?.quantity == quantity}
                            setQuantity={setQuantity}
                            handleOnClick={handleOnClick}
                        />
                }
            </CardActions>
        </Card >
    )
}

const getDefaultQuantity = (shopCartItems: ShopCartItem | undefined) =>
    shopCartItems?.quantity || 1