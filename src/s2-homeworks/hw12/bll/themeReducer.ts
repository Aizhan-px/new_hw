const initState = {
    themeId: 1,
}

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}


export const themeReducer = (
    state = initState,
    action: ChangeThemeIdActionType
) => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id,
            }

        default:
            return state
    }
}


export const changeThemeId = (
    id: number
): ChangeThemeIdActionType => ({
    type: 'SET_THEME_ID',
    id,
}) // fix any
