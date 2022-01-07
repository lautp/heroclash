import React, {useReducer} from 'react';
import HeroContext from './heroContext';
import HeroReducer from './heroReducer';
import {RESULTS, IMAGES, CLEAR_RESULTS, ADD_HERO} from '../../types'

const HeroState = props => {
    const initialState = {
        images:{},
        weight:'',
        height:'',
        name:'',
        alias:'',
        eyes:'',
        hair:'',
        workplace:'',
        team: [],
        results:null
    }

    const [state, dispatch] = useReducer(HeroReducer, initialState)

    //get results
    const getResults = results => {
        dispatch({type:RESULTS, payload:results})

    }

    //get images 
    const getImages = results => {
        const images = results.map(hero => (hero.image.url))

        dispatch({type:IMAGES, payload:images})
    }

    //clear results
    const clearResults = () => {
        
        dispatch({type:CLEAR_RESULTS})
    }

    const addHero = (e, results) => {

        
        
        dispatch({type:ADD_HERO, payload:e.target})

        

        
    }

    
    return <HeroContext.Provider
        value={{
            results:state.results,
            images:state.images,
            team:state.team,
            getImages,
            getResults,
            clearResults,
            addHero,
            
        }}
    >
        {props.children}
    </HeroContext.Provider>
}

export default HeroState;