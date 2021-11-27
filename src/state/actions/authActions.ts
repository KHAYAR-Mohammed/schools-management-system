
import { AuthActionType,AuthDataType,LoginDataType,SignupDataType } from "../action-types/index"

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
    payload: SignupDataType
}

export type AuthAction = LoginActionInterface | LogoutActionInterface | SignUpActionInterface;
