import { User } from "./model/user/user";

interface AuthContextType {
    user: User | null;
    signin: (user: User, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

export default AuthContextType ;