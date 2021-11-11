
import { AuthDataType,LoginDataType,UserDataType } from "../state/action-types/index"

export function LogIn(payload: LoginDataType): AuthDataType {
    throw new Error("Function not implemented.");
}

export function LogOut(payload: AuthDataType): AuthDataType {
    throw new Error("Function not implemented.");
}

export function SignUp(payload: UserDataType): AuthDataType {
    throw new Error("Function not implemented.");
}