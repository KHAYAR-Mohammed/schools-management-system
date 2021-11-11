import { AuthActionType,AuthDataType,LoginDataType } from "../action-types/index"
import { AuthAction } from "../actions"
import { LogIn , LogOut , SignUp} from "../../controllers"

const InitialAuthData = {
    loggedIn:false
};

const authReducer = (state: AuthDataType = InitialAuthData, action: AuthAction): AuthDataType => {
    switch (action.type){
        case AuthActionType.LOGIN:
            return LogIn(action.payload); // Login Logic
        case AuthActionType.LOGOUT:
            return LogOut(action.payload); // Logout Logic
        case AuthActionType.SIGNUP:
            return SignUp(action.payload); // Logout Logic
        default:
            return state;
    }
}




export default authReducer;

