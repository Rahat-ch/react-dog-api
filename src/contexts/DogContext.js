import React, { createContext, useEffect, useReducer } from 'react'
import dogReducer from '../reducers/dogReducer'
import mapDogProps from '../utils/mapDogProps'

export const DogContext = createContext(null)

const initialState = {
    fetchingAllProps: true,
    fetchingSingleProps: true,
    dogProps: [],
    currentDogProps: {},
    nextDogProps: {},
};

export function DogProvider({ children }) {
    const [state, dispatch] = useReducer(dogReducer, initialState);
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(res => res.json())
            .then(data => {
                const { message } = data
                mapDogProps(message, dispatch)
            })
    }, [])
    return <DogContext.Provider value={{ ...state, dispatch }}>{children}</DogContext.Provider>
}