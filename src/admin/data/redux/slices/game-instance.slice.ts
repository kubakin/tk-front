import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {GameInstanceListItem} from "../../query/game-instance/game-instance.result";
import {gameInstanceList} from "../../query/game-instance/game-instance.queries";

interface InitialStateInterface {
    list: GameInstanceListItem[]
}

const initialState: InitialStateInterface = {
    list: []
}

const slice = createSlice({
    name: 'game-instance_slice',
    initialState,
    reducers: {
        setGameInstanceList: (state, action: PayloadAction<GameInstanceListItem[]>) => {
            state.list = action.payload;
        }
    }
})

export const getGameInstanceList = () => {
    return async function execute(dispatch: Dispatch) {
        const data = await gameInstanceList()
        dispatch(slice.actions.setGameInstanceList(data.data))

    }
}


export const {reducer} = slice