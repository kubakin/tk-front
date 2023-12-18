import React from 'react';
import {DownOutlined} from '@ant-design/icons';
import {Dropdown, Space} from 'antd';

export interface GameDropDownItemInterface {
    id: string;
    name: string
}

export interface GamesDropDownComponentInterface {
    games: GameDropDownItemInterface[]
}

const GameDropDownComponent: React.FC<GamesDropDownComponentInterface> = (props) => (
    <Dropdown menu={{
        items: props.games.map(it => {
            return {
                key: it.id,
                label: it.name
            }
        })
    }}>
        <a href={'/'} onClick={(e) => e.preventDefault()}>
            <Space>
                Hover me
                <DownOutlined/>
            </Space>
        </a>
    </Dropdown>
);

export default GameDropDownComponent;