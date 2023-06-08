import React, { useState } from "react"
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import ListSubheader from '@mui/material/ListSubheader'
import FormControl from '@mui/material/FormControl'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import style from "./ShopItemCard.module.sass"

export default function ShopItemCard(props: ShopItemCardProps) {
    const [quantity, setQuantity] = useState("1")

    const handleOnClick = () => {
        console.log("click")
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
                <>
                    <FormControl variant="filled">
                        <Select
                            className={style.select}
                            disableUnderline
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                            label="Age"
                        >
                            <ListSubheader>Kg</ListSubheader>
                            {
                                [...Array(5)].map((_, i) => {
                                    let disabled = props.quantityAvailable >= i + 1 ? false : true
                                    return (
                                        <MenuItem
                                            key={`select-item-${i + 1}`}
                                            disabled={disabled}
                                            value={i + 1}
                                        >
                                            {i + 1}
                                        </MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                    <Button
                        onClick={handleOnClick}
                        size="medium"
                    >
                        Dodaj
                    </Button>
                </>
            </CardActions>
        </Card >
    )
}

