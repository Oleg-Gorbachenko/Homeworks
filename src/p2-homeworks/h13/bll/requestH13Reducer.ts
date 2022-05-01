import {RequestsAPI} from "../api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../../h10/bll/store";

type InitialStateType = {
    text: string
}

export const initState: InitialStateType = {
    text: 'Нажми на кнопку - получишь результат!',
};

export const requestH13Reducer = (state = initState, action: changeTextType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE_TEXT': {
            return {...state, text: action.value};
        }
        default:
            return state;
    }
};

export type changeTextType = ReturnType<typeof changeText>

export const changeText = (value: string): any => ({type: 'CHANGE_TEXT', value} as const)

type ThunkDispatchType = ThunkDispatch<AppStoreType, unknown, changeTextType>;
type ThunkType = ThunkAction<void, AppStoreType, unknown, changeTextType>;

export const requestOnTheServer = (value: string): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        RequestsAPI.myRequest(value)
            .then(response => {
                dispatch(changeText(response.data.errorText))
            })
            .catch(err => {
                dispatch(changeText(err.response.data.errorText))
            })
    }
}
