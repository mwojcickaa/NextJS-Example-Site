import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/store/store'

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector
export const useStoreDispatch: () => AppDispatch = useDispatch
