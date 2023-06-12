import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { shopCartInitialState } from './initialState'

export const shopCartReducer = createSlice({
    name: 'shopCart',
    initialState: shopCartInitialState,
    reducers: {
        add: (state, action: PayloadAction<ShopCartItem>) => {
            let element = state.selected.find(e => e.id == action.payload.id)

            if (element != undefined) {
                element.quantity = action.payload.quantity
            } else {
                state.selected.push(action.payload)
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            const filterState = state.selected.filter(item => item.id !== action.payload)
            state.selected = filterState
        }
    },
})

export const { add, remove } = shopCartReducer.actions
export default shopCartReducer.reducer