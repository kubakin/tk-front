import AdminLayout from "../../components/Layout";
import {useEffect} from "react";
import {getGameInstanceList} from "../../data/redux/slices/game-instance.slice";
import {GameInstanceTable} from "../../components/GameInstance/Tables/GameInstanceTable";
import {useDispatch, useSelector} from "../../../store/store";

export const GameInstancePage = () => {
    const dispatch = useDispatch()
    const {list} = useSelector((state) => state.adminGameInstance);
    useEffect(() => {
        dispatch(getGameInstanceList())
    }, [dispatch])
    return <AdminLayout>
        <GameInstanceTable data={list}/>
    </AdminLayout>
}