import internal from "stream";

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
interface SignupDataInterface{
    userProfilePicture:string, // Base64 Image
    username:string,
    password:string,
    firstName:string,
    lastname:string,
    email:string,
    birthday:Date,
    adresseLine1:string,
    adresseLine2:string,
    city:string,
    country:string
};

/* SignupDataInterface
    Used As : 
    *authController
        - Parameter of Signup function  
*/ 
interface LoginDataInterface{
    login:string,
    password:string,
    varification?:string
};

export  enum AuthActionType{
    LOGIN ="login",
    LOGOUT="logout",
    SIGNUP="sigup"    
};

export type UserDataType=UserDataInterface;
export type AuthDataType=AuthDataInterface;
export type LoginDataType=LoginDataInterface;
export type SignupDataType=SignupDataInterface;

