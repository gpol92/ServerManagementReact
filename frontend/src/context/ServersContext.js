import { createContext, useReducer } from 'react'

export const ServersContext = createContext()

export const serversReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SERVERS': 
            return {
                servers: action.payload
            }
        case 'CREATE_SERVER':
            return {
                servers: [action.payload, ...state.servers]
            }
        case 'DELETE_SERVER':
            return {
                servers: state.servers.filter((s)=> s._id !== action.payload._id)
            }
        default: 
            return state
    }
}

export const ServersContextProvider = ( {children }) => {
    const [state, dispatch] = useReducer(serversReducer, {
        servers: null
    })

    // dispatch({type: 'SET_SERVERS', payload: [{}, {}]})

    return (
        <ServersContext.Provider value={{...state, dispatch}}>
            { children }
        </ServersContext.Provider>
    )
}