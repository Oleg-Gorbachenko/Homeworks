type InitialStateType = {
    currentTheme: string
    themes: Array<string>
}

export const initState: InitialStateType = {
    currentTheme: 'some',
    themes: ['dark', 'red', 'some', 'myTheme'],
};

export const themeReducer = (state = initState, action: changeThemeType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {...state, currentTheme: action.value};
        }
        default:
            return state;
    }
};

export type changeThemeType = ReturnType<typeof changeTheme>

export const changeTheme = (value: string): any => {
    return {
        type: 'CHANGE_THEME', value
    } as const
}