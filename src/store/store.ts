import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { persistShopCartReducer, persistShopItemsReducer } from './persist'
import shopCartReducer from '@/reducers/shopCartReducer'
import shopItemsReducer from '@/reducers/shopItemsReducer'

export const store = configureStore({
    reducer: {
        shopCart: shopCartReducer,
        shopItems: shopItemsReducer
    },
    middleware: []
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
