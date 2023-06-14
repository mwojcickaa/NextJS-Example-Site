import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { persistShopCartReducer, persistShopItemsReducer } from './persist'

export const store = configureStore({
    reducer: {
        cartItems: persistShopCartReducer,
        shopItems: persistShopItemsReducer
    },
    middleware: []
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
