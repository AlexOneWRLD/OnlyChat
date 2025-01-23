import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // Сортировка по имени
            const sortedUsers = [...state].sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name.localeCompare(b.name, 'ru');
                } else {
                    return b.name.localeCompare(a.name, 'ru');
                }
            });
            return sortedUsers;
        }
        case 'check': {
            return state.filter(u => u.age> 18)
        }
        default:
            return state
    }
}
