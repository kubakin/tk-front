import React from 'react';
import {Menu} from 'antd';
import GameDropDownComponent from "../GameDropDown";
import Sider from "antd/es/layout/Sider";
import {useLocation, useNavigate} from "react-router";


const MenuComponent: React.FC = () => {
    // const [collapsed, setCollapsed] = useState(false);

    // const toggleCollapsed = () => {
    //     setCollapsed(!collapsed);
    // };

    const location = useLocation()
    const navigate = useNavigate();

    return (
        <Sider trigger={null} collapsible collapsed={false}>
            <GameDropDownComponent games={[]}/>

            <div className="demo-logo-vertical"/>
            <Menu
                theme="dark"
                defaultValue={location.pathname}
                mode="inline"
                onClick={(e) => navigate(e.key)}
                defaultSelectedKeys={[location.pathname]}
                items={[
                    {
                        key: '/admin/user',
                        label: 'Users'
                    },
                    {
                        key: '/admin/team',
                        label: 'Teams',
                    },
                    {
                        key: '/admin/task',
                        label: 'Tasks',
                    },
                    {
                        key: '/admin/game-instance',
                        label: 'Progress',
                    },
                ]}
            />
        </Sider>
    );
};

export default MenuComponent;