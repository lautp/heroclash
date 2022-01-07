import React, {useReducer} from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken'

import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    IS_AUTH
} from '../../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    //Is authenticated
    const isAuth = () => {
        dispatch({type:IS_AUTH})
    }

    //Load User
    const loadUser = async() => {
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
    }

    //Login User
    const login = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('http://challenge-react.alkemy.org/', formData, config);

            dispatch({ type: LOGIN_SUCCESS, payload: res.data});

            loadUser();
        } catch (err) {
            dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
        }
    };
    
    //Clear Errors
    const clearErrors = () => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }
    return (
        <AuthContext.Provider
        value= {{
            token: state.token,
            isAuthenticated: state.isAuthenticated, 
            loading: state.loading,
            user: state.user,
            error: state.error,
            loadUser,
            login,
            clearErrors,
            isAuth
        }}>
            { props.children }
        </AuthContext.Provider>
    );

};




export default AuthState;
