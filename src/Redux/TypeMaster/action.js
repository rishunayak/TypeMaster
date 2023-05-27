import { SET_CORRECT_KEY, SET_CURRENT_KEY, SET_TIMER, SET_TOTAL_KEY, SET_TYPE } from "./actionTypes";



export const setCurrentKey=()=>dispatch=>{dispatch({type:SET_CURRENT_KEY})}

export const setTimer=(time)=>dispatch=> { dispatch({type:SET_TIMER,payload:time})}
export const setType=(type)=>dispatch=>{ dispatch({type:SET_TYPE,payload:type})}

export const setTotalKey=(value)=>dispatch=>{dispatch({type:SET_TOTAL_KEY,payload:value})}

export const setCorrectKey=(value)=>dispatch=>{dispatch({type:SET_CORRECT_KEY,payload:value})}
