import {UserListComponent} from "../../components/User/UserListComponent";
import {getUsers} from "../../data/redux/slices/user.slice";
import {useEffect} from "react";
import AdminLayout from "../../components/Layout";
import {useDispatch, useSelector} from "../../../store/store";

export const UserPage = () => {
    const dispatch = useDispatch()
    const {users} = useSelector((state) => state.adminUser);
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    return <AdminLayout>
        <UserListComponent users={users}/>
    </AdminLayout>
}