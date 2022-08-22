import {useSelector,TypedUseSelectorHook} from 'react-redux'
import { RootState } from '../globalReducer'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector