import {TypedUseSelectorHook, useDispatch, useSelector, useStore} from 'react-redux'
import {AppDispatch, AppStore, RootState} from "@/shared/store/store";

export const hooks: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore