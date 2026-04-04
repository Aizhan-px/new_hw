import { UserType } from '../HW8'

export type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            // Создаём копию, чтобы не мутировать оригинальный массив
            const sorted = [...state].sort((a, b) => a.name.localeCompare(b.name))
            // Если payload 'up' — возвращаем как есть, иначе переворачиваем для 'down'
            return action.payload === 'up' ? sorted : sorted.reverse()
        }
        case 'check': {
            // Фильтруем массив по возрасту >= payload (совершеннолетние)
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}

