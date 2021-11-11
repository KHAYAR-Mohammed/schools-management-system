
import { AuthActionType,AuthDataType,LoginDataType,UserDataType } from "../action-types/index"

interface LoginActionInterface {
    type: AuthActionType.LOGIN,
    payload: LoginDataType
}

interface LogoutActionInterface {
    type: AuthActionType.LOGOUT,
    payload: AuthDataType
}

interface SignUpActionInterface {
    type: AuthActionType.SIGNUP,
    payload: UserDataType
}

export type AuthAction = LoginActionInterface | LogoutActionInterface | SignUpActionInterface;
