import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    IS_AUTH
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                 ...state,
                 ...action.payload,
                 isAuthenticated: true,
                 loading: false
            } ;
        case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        case IS_AUTH:
            return {
                ...state,
                isAutheticated: true
            }
        
        
        default:
            return state;
    }
}