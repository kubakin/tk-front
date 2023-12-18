import {createSlice, Dispatch} from "@reduxjs/toolkit";

interface InitialStateInterface {
    hasAccountAuth: boolean;
}

const initialState: InitialStateInterface = {
    hasAccountAuth: true
}

const slice = createSlice({
    name: 'user_global_slice',
    initialState,
    reducers: {
        switchHasAccountAuth: (state) => {
            state.hasAccountAuth = !state.hasAccountAuth
        }
    }
})

export const switchHasAccountAuth = () => {
    return async function execute(dispatch: Dispatch) {
        dispatch(slice.actions.switchHasAccountAuth())
    }
}


export const {reducer} = slice