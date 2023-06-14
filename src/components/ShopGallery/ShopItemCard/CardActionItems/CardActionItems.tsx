import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import ListSubheader from '@mui/material/ListSubheader'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import style from "./CardActionItems.module.sass"
import { Box } from '@mui/material'


export default function CardActionItems(props: CardActionItemsProps) {
    const { quantity, disableButton, quantityAvailable, setQuantity, handleOnClick } = props

    return (
        <Box className={style.box}>
            <FormControl variant="filled">
                <Select
                    className={style.select}
                    disableUnderline
                    value={quantity}
                    onChange={e => setQuantity(Number(e.target.value))}
                    label="quantity"
                >
                    <ListSubheader>Kg</ListSubheader>
                    {
                        [...Array(5)].map((_, i) => {
                            let disabled = quantityAvailable > i + 1 ? false : true
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
                disabled={disableButton}
            >
                Dodaj
            </Button>
        </Box>
    )
}

