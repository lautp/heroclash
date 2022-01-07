import {
    RESULTS,
    IMAGES,
    CLEAR_RESULTS,
    ADD_HERO
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case RESULTS:
            return {
                ...state,
                results:action.payload
            }
        case CLEAR_RESULTS:
            return {
                ...state,
                results:[]
            }
        case IMAGES:
            return {
                ...state,
                images:action.payload
            }
        case ADD_HERO:
            return {
                ...state,
                team: [...state.team, action.payload]
            }
                
        default:
            return state;
    }
}