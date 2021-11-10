import { Dispatch } from "redux"
import { AuthActionType,LoginDataType } from "../action-types"
import { AuthAction } from "../actions/index"

export const Login = (data: LoginDataType) => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: AuthActionType.LOGIN,
            payload: data
        })
    }
}

export const Logout = (data: LoginDataType) => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: AuthActionType.LOGIN,
            payload: data
        })
    }
}