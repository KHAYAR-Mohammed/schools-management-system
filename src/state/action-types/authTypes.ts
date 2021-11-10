/* UserDataInterface */
interface UserDataInterface {
    username:string
    sessionKey?:string
};

/* AuthDataInterface - Used in the application as the 'State' of logged user
    Used As : 
    *authController
        - Return Value of the LogIn function
        - Parameter of LogOut function 
*/
interface AuthDataInterface{
    loggedIn:boolean,
    user?:UserDataType
};

/* LoginDataInterface
    Used As : 
    *authController
        - Parameter of LogIn function  
*/ 
interface LoginDataInterface{
    login:string,
    password:string
};

export  enum AuthActionType{
    LOGIN ="login",
    LOGOUT="logout"    
};

export type UserDataType=UserDataInterface;
export type AuthDataType=AuthDataInterface;
export type LoginDataType=LoginDataInterface;

