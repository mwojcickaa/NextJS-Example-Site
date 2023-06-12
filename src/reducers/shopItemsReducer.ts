import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { shopItemsInitialState } from './initialState'

export const shopItemsSlice = createSlice({
    name: 'shopItems',
    initialState: shopItemsInitialState,
    reducers: {
        add: (state, action: PayloadAction<Array<ShopItem>>) => {
            state.items = action.payload
        },
        reset: (state) => {
            state.items = []
        }
    },
})

export const { add, reset } = shopItemsSlice.actions
export default shopItemsSlice.reducer