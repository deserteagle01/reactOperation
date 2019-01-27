import {ACTION_TYPE_SECRVICE_CALL,REFRESH_SCREEN} from '../Actions/ActionType.js';
import { Alert } from 'react-native';

const initialState={
  isLoading:true,
  responseALbums:null,
  error:null,
  isRefresh:false
}

const getAlbumReducers = (state = initialState, action) =>{
  switch (action.type) {
    case ACTION_TYPE_SECRVICE_CALL.LOADING:
      return {...state,isLoading:true,error:null};
    case ACTION_TYPE_SECRVICE_CALL.SUCCESS:
        return {...state,isLoading:false,responseALbums:action.responseALbums,error:null};
    case ACTION_TYPE_SECRVICE_CALL.ERROR:
        return {...state, isLoading:false,responseALbums: null,error:action.console.error};
    case REFRESH_SCREEN:
      return{...state,isRefresh:true};
    default:
      return state;
  }
}

export default getAlbumReducers;
