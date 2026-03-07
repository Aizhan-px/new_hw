import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const  copyState = [...state]

            if (action.payload === 'up') {
                copyState.sort((a, b) => a.name.localeCompare(b.name))
            }

            if (action.payload === 'down') {
                copyState.sort((a, b) => b.name.localeCompare(a.name))
            }

            return copyState
        }

        case 'check': {
            return state.filter(p => p.age >= action.payload)
        }

        default:
            return state
    }
}
