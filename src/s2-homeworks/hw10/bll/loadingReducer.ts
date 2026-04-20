

const initState = {
    isLoading: false,
}

type StateType = {
    isLoading: boolean
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): StateType => { // fix any
    switch (action.type) {
        case'CHANGE_LOADING':
        return {
                ...state,
                isLoading: action.isLoading,
        }
        default: //default нужен, чтобы вернуть текущее состояние, если action не обработан.
            return state
    }
}


export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

//TODO raed and repeat everythink
