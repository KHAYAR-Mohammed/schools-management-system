import { Dispatch } from "redux"
import { AuthActionType,LoginDataType,SignupDataType } from "../action-types"
import { AuthAction } from "../actions"

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


export const Signup = (data: SignupDataType) => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: AuthActionType.SIGNUP,
            payload: data
        })
    }
}
