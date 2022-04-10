export type InitialStateType = {
    isLoading: boolean
}

export const initState: InitialStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingACType): InitialStateType => {
    switch (action.type) {
        case "CHANGE LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => {
    return {
        type: "CHANGE LOADING", isLoading
    } as const
}