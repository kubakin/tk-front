import {Table} from "antd";
import {FC} from "react";
import {TaskInstanceItemInterface, TaskInstanceTable} from "./TaskInstanceTable";

export interface GameInstanceItemInterface {
    id: string;
    score: number;
    team: {
        id: string
        name: string
    },
    game: {
        id: string
        name: string
    }
    tasks: TaskInstanceItemInterface[]
}

interface GameInstanceTableInterface {
    data: GameInstanceItemInterface[]
}

export const GameInstanceTable: FC<GameInstanceTableInterface> = (props) => {
    return <Table expandedRowRender={(r) => TaskInstanceTable({data: r.tasks})} rowKey={'id'}
                  dataSource={props.data}
                  columns={
                      [
                          {
                              title: 'Team',
                              dataIndex: 'team',
                              render: (val) => val?.name,
                          },
                          {
                              title: 'Game',
                              dataIndex: 'game',
                              render: (val) => val?.name,
                          },
                          {
                              title: 'Status',
                              dataIndex: 'status',
                          },
                          {
                              title: 'Score',
                              dataIndex: 'score',
                          },
                      ]
                  }/>
}