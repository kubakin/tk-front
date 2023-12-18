import {FC, ReactNode, useEffect} from "react";
import {useNavigate} from "react-router";

export const AdminAuthProvider: FC<{ children: ReactNode }> = ({children}) => {

    const token = localStorage.getItem('ADMIN_TOKEN')
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate('/admin/auth')
        }
    }, [token])
    return <>{children}</>
}