import {FC} from "react";
import {Table} from 'antd';

export interface UserListItemInterface {
    id: string;
    phone: string;
    name?: string;
    team: {
        id: string;
        name: string;
    } | null
}

export interface UserListComponentInterface {
    users: UserListItemInterface[];
}

export const UserListComponent: FC<UserListComponentInterface> = (props) => {
    return <Table rowKey={'id'} dataSource={props.users} columns={
        [
            {
                title: 'ID',
                dataIndex: 'id',
            },
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Team',
                render: (val) => val?.name,
                dataIndex: 'team',
            }
        ]
    }/>
}