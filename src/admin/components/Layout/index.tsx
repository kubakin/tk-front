import React, {memo, ReactNode} from "react";
import {Layout} from 'antd';
import MenuComponent from "./Menu";
import AdminHeader from "./Header";

const {Header, Content} = Layout;

export interface AdminLayoutInterface {
    children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutInterface> = (props) => {
    // const socket = useAdminSocket()
    // useEffect(() => {
    //     socket.on('message', ({text, id}: { text: string, id: string }) => {
    //         notification.info({message: 'Новое сообщение', description: text, key: 'msg'})
    //     })
    // }, [socket])
    return (
        <Layout style={{minHeight: '100%'}}>
            <MenuComponent/>
            <Layout>
                <AdminHeader/>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        // background: colorBgContainer,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default memo(AdminLayout);