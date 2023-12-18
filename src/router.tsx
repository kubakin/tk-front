import Auth from "./admin/components/Auth";
import {AdminAuthProvider} from "./admin/providers/AuthProvider";
import {TaskPage} from "./admin/pages/TaskPage";
import {UserPage} from "./admin/pages/UserPage";
import {GameInstancePage} from "./admin/pages/GameInstancePage";
import React from "react";
import {LoginPage} from "./user/pages/LoginPage";
import {TeamPage} from "./user/pages/TeamPage";

const adminRouter = [
    {
        path: '/admin/auth',
        element: <Auth/>
    },
    {
        path: '/admin/task',
        element: <AdminAuthProvider><TaskPage/></AdminAuthProvider>
    },
    {
        path: '/admin/user',
        element: <AdminAuthProvider><UserPage/></AdminAuthProvider>
    },
    {
        path: '/admin/game-instance',
        element: <AdminAuthProvider><GameInstancePage/></AdminAuthProvider>
    }
]

const userRouter = [
    {
        path: '/',
        element: <LoginPage/>
    },
    {
        path: '/team',
        element: <TeamPage/>
    },
]

// export const routes = [...adminRouter, ...userRouter]
export const routes = [...adminRouter.map(it => {
    return {
        ...it,
        element: <div className={'admin'} children={it.element}/>
    }
}), ...userRouter.map(it => {
    return {
        ...it,
        element: <div className={'user'} children={it.element}/>
    }
})]