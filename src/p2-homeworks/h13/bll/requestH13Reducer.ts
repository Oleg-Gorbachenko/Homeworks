import {RequestsAPI} from "../api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../../h10/bll/store";

type InitialStateType = {
    isChecked: boolean
}

export const initState: InitialStateType = {
    isChecked: false,
};

export const requestH13Reducer = (state = initState, action: changeTextType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE_TEXT': {
            return {...state, isChecked: action.isChecked};
        }
        default:
            return state;
    }
};

export type changeTextType = ReturnType<typeof changeText>

export const changeText = (isChecked: string): any => ({type: 'CHANGE_TEXT', isChecked} as const)

type ThunkDispatchType = ThunkDispatch<AppStoreType, unknown, changeTextType>;
type ThunkType = ThunkAction<void, AppStoreType, unknown, changeTextType>;

export const requestOnTheServer = (isChecked: boolean): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        RequestsAPI.myRequest(isChecked)
            .then(response => {
                dispatch(changeText(response.data.info))
            })
            .catch(err => {
                dispatch(changeText(err.response.data.info))
            })
    }
}
