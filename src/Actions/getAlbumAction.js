import { ACTION_TYPE_SECRVICE_CALL, REFRESH_SCREEN } from './ActionType';
import { connect } from 'react-redux';
import {API} from '../Helper/constant';
import {Alert,Linking,AsyncStorage} from 'react-native';




export function showAlertmessage(strMEssage){
  Alert.alert(
         'Failure',
          strMEssage,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
  { cancelable: false }
  )
}

export function showinternetAlertmessage(){
  Alert.alert(
         'Connection',
          'Network request failed',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
  { cancelable: false }
  )
}

export  function getAlbumaction(){
    return(dispatch,state) =>{
      dispatch({type:ACTION_TYPE_SECRVICE_CALL.LOADING});
      let url = API.BASE_URL + API.ALBUMS;
                  return  fetch(url,{
                           method:'GET',
                          /* headers:{
                             'Content-Type': 'application/x-www-form-urlencoded',
                             'Authorization': 'Bearer '+strAccessToken,
                          }
                          ,
                            body:''
                            */
                        })
                        .then(response => {
                                const status = response.status;
                                const data = response.json();
                                console.log('http server status=+',status);
                                return Promise.all([status, data]);
                          })
                          .then((data) => {

                              if (data[0] === 200){
                                    //if(data[1].status == RESPONSE_CODE.SUCEESS){
                                          dispatch(activeProfileSuccess(data))
                                    //}
                              }
                              else{
                                    dispatch(activeProfileActionError(data))
                              }

                            })
                          .catch((error) => {
                              Alert.alert(error.message+' \nAPI = '+API.ACTIVE_PROFILE);
                              console.error(error);
                              dispatch(activeProfileActionError(error))
                        });
        }
}



export const activeProfileSuccess = (response) =>({
  type:ACTION_TYPE_SECRVICE_CALL.SUCCESS,
  responseALbums:response
})

export const activeProfileActionError = (error) =>({
  type: ACTION_TYPE_SECRVICE_CALL.ERROR,
  error: error
})
