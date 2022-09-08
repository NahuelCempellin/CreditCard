import { SET_STATE } from "../constants/cosntants";



export function setState(data){
    console.log(data)
  return {
    type: SET_STATE,
    payload: data
  }  
}