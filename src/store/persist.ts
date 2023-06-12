import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import shopCartReducer from '@/reducers/shopCartReducer'
import shopItemsReducer from '@/reducers/shopItemsReducer'

const persistConfig = {
    key: 'root',
    storage,
}

export const persistShopCartReducer = persistReducer(persistConfig, shopCartReducer)
export const persistShopItemsReducer = persistReducer(persistConfig, shopItemsReducer)