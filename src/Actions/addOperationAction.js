import { ACTION_TYPE } from './ActionType2';
import { connect } from 'react-redux';
import {Alert,Linking,AsyncStorage} from 'react-native';


export  function performAdditionAction(dictionary){

      return(dispatch,state) =>{
          return new Promise((resolve) => {
              resolve(dispatch(addactionSuccess(dictionary)));
          })
      }
}

export const addactionSuccess = (dictionary) =>({
  type:ACTION_TYPE.ADDITION,
  responseAddData:dictionary
})
