import { UserType } from '../HW8'

export type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
     switch (action.type) {
            case 'sort': {
                // создаём копию массива, чтобы не мутировать оригинал
                const sorted = [...state].sort((a, b) => a.name.localeCompare(b.name))

                // payload 'up' — по алфавиту, 'down' — обратный алфавит
                return action.payload === 'up' ? sorted : [...sorted].reverse()
            }

            case 'check': {
                // фильтруем людей по возрасту >= payload
                return state.filter(u => u.age >= action.payload)
            }

            default:
                // если тип действия неизвестен, возвращаем исходный массив
                return state
        }
    }