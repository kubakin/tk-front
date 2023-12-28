import {Card, QRCode, theme} from "antd";
import React from "react";
import {useMe} from "../../data/query/user/me";
import {Button} from "antd";
import { PersonLimit } from "src/user/components/Game/fields/PersonLimit";
import { TimeLimit } from "src/user/components/Game/fields/TimeLimit";
import { Cost } from "src/user/components/Game/fields/Cost";
import { TaskStrategy } from "src/user/components/Game/fields/TaskStrategy";
import { GamaSessionProgress } from "src/user/components/Game/GameSessionSteps";
import { usePosition } from "src/shared/hooks/usePosition";
const {Meta} = Card;


export const PrepaContainter = () => {
    const {me: {data: {me}}} = useMe()
    const pos = usePosition()
    const game = me.team?.gameSession?.game
    const gameInstance = me?.team?.gameSession
    const {token} = theme.useToken();
    const contentStyle: React.CSSProperties = {
        textAlign: 'left',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
    };
    if (game && gameInstance) {
      
    return <Card
        style={contentStyle}
    >
        <Meta
            title={`Название: ${game.name}`}
            style={{paddingBottom: '20px'}}
            description={`Описание: ${game.description}`}
        />
        {/* <QRCode  value="https://picturesofpeoplescanningqrcodes.tumblr.com/" /> */}
        <div>
            <PersonLimit limit={game.personLimit}/>
            <TimeLimit limit={game.duration}/>
            <Cost cost={game.cost}/>
            <TaskStrategy taskStrategy={game.taskStrategy}/>
        </div>
    </Card>
    }
    return <>Empty</>
}