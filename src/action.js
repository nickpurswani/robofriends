import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS } from "./constant"
import axios from "axios";
export const setSearchField=(text)=>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
export const requestRobots=()=>{
    return (dispatch)=>{
    dispatch({type: REQUEST_ROBOTS_PENDING});

    axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )
    .then((data)=>{ console.log(data.data); dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data.data})})
    .catch(error=>dispatch({type:REQUEST_ROBOTS_FAILED, payload:error}))
}}