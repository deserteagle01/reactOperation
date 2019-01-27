import {ACTION_TYPE} from '../Actions/ActionType2.js';
import { Alert } from 'react-native';

const initialState={
  responseAddData:null,
  employeeData:[]
}

const addOperationReducer = (state = initialState, action) =>{
  switch (action.type) {
    case ACTION_TYPE.ADDITION:
      return {...state,employeeData:state.employeeData.concat(action.responseAddData)};

    default:
      return state;
  }
}

export default addOperationReducer;
