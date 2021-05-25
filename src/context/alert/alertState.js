import React, {useReducer} from 'react'
import { HIDE_ALERT, SHOW_ALERT } from '../types'
import { AlertCOntext } from './alertContext'
import { alertReducer } from './alertReducer'


export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, null)


    const hide = () => dispatch({type: HIDE_ALERT})

    const show = (text, type = 'secondary') => {
        dispatch({
            type: SHOW_ALERT,
            payload: {type, text}
        })
    }

    return (
        <AlertCOntext.Provider value={{
            hide, show, alert: state
        }} >
            {children}
        </AlertCOntext.Provider>
    )
}