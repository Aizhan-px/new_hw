import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // возвращаем новый массив, сортируем по имени
            return [...state].sort((a, b) =>
                action.payload === 'up'
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            )
        }
        case 'check': {
            // фильтруем только людей с возрастом >= payload
            return state.filter(user => user.age >= action.payload)
        }
        default:
            return state
    }
    }



