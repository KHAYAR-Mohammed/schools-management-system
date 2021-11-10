
import { AuthActionType,AuthDataType,LoginDataType } from "../action-types/index"

interface LoginActionInterface {
    type: AuthActionType.LOGIN,
    payload: LoginDataType
}

interface LogoutActionInterface {
    type: AuthActionType.LOGOUT,
    payload: AuthDataType
}


export type AuthAction = LoginActionInterface | LogoutActionInterface;
