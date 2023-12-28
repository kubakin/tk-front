import React, { useState } from 'react';
import {Button} from 'antd';
import {Header as HeaderComponent} from "antd/es/layout/layout";
import { CreateUpdateGameModal } from 'src/admin/actions/CreateUpdateGame.modal';


const AdminHeader: React.FC = () => {
    const [createModal, setCreateModal] = useState<boolean>(false)
    return (
        <HeaderComponent style={{padding: 0}}>
            <Button onClick={()=>setCreateModal(true)}>Test</Button>
            <Button
                type="text"
                // icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                // onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
            <CreateUpdateGameModal onClose={()=> setCreateModal(false)} visible={createModal}/>
        </HeaderComponent>
    );
};

export default AdminHeader;