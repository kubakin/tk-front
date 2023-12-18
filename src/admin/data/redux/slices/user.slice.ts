import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {userList} from "../../query/user/user.queries";
import {UserListItem} from "../../query/user/user.result";

interface InitialStateInterface {
    users: UserListItem[]
}

const initialState: InitialStateInterface = {
    users: []
}

const slice = createSlice({
    name: 'user_slice',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserListItem[]>) => {
            state.users = action.payload;
        }
    }
})

export const getUsers = () => {
    return async function execute(dispatch: Dispatch) {
        const data = await userList()
        dispatch(slice.actions.setUsers(data.data))

    }
}

// export const getUsers =
//     (): AppThunk =>
//         async (dispatch): Promise<void> => {
//             try {
//                 // dispatch(slice.actions.getUsers());
//                 // const response = await documentsApi.fetchDocumentsUser(params);
//                 // dispatch(slice.actions.setDocuments(response.data));
//                 // dispatch(slice.actions.setMeta(response.meta));
//             } finally {
//                 // dispatch(slice.actions.setLoadingDocuments(false));
//             }
//         };

export const {reducer} = slice