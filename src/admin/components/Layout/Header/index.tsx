import React from 'react';
import {Button} from 'antd';
import {Header as HeaderComponent} from "antd/es/layout/layout";


const Header: React.FC = () => {
    return (
        <HeaderComponent style={{padding: 0}}>
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
        </HeaderComponent>
    );
};

export default Header;