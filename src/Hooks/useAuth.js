/* import { useContext } from "react";
import { AuthContext } from "../components/contexts/AuthProvider/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth; */

/* export default function useAuth() {
    const auth = false
    return auth;
} */
import { AuthContext } from "../components/contexts/AuthProvider/AuthProvider";
import { useContext } from 'react';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;