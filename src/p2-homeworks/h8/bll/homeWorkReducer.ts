import {PeopleType} from "../HW8";

type ActionsType = { type: 'SORT', payload: 'up' | 'down' } | { type: 'CHECK', payload: number }

export const homeWorkReducer = (state: Array<PeopleType>, action: ActionsType): Array<PeopleType> => {
    switch (action.type) {
        case 'SORT': {
            let newState = [...state].sort(function (a, b) {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'CHECK': {
            return state.filter(p => p.age > action.payload)
        }
        default:
            return state
    }
}


