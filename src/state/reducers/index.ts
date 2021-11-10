import { combineReducers } from "redux";



const reducers = combineReducers({
    //bank: bankReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>