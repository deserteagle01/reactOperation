
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,Dimensions} from 'react-native';

import {
  API,
} from "../Helper/constant";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as GetAlbumAction from "../Actions/getAlbumAction";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

type Props = {};

 class firstScreen extends Component<Props> {

componentDidMount(){

  this.props.actions.GetAlbumAction.getAlbumaction()
        .then(() => {
          this.handleLoginResponse();
        })
        .catch(e => {

        });
}

//----------------> Login API Response handle
  async handleLoginResponse() {
    var Resoponse_GET = this.props.responseALbums;
    var httpResponsecode = Resoponse_GET[0];
    var api_response = Resoponse_GET[1];
    //console.log('Response = '+JSON.stringify(api_response));
  }

componentWillMount(){
  console.log(this.props.employeeData);
}

buttonPress(){
  //alert('hi');
  this.props.navigation.navigate('SecondScreen');
}

  render() {
    return (
      <View style={{backgroundColor:'white',flex:1,alignItems:'center'}}>

        <TouchableOpacity style={{marginTop:deviceHeight*.10,height:deviceHeight*0.1,width:deviceWidth*0.50,backgroundColor:'lightgray',alignItems:'center',justifyContent:'center'}}
          onPress={()=>this.buttonPress()}>

              <Text>Add Data</Text>

        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//---> Redux  Methods
const mapStateToProps = state => ({
  isLoading: state.getAlbumReducers.isLoading,
  error: state.getAlbumReducers.error,
  responseALbums: state.getAlbumReducers.responseALbums,
  isRefresh: state.getAlbumReducers.isRefresh,
  employeeData: state.addOperationReducer.employeeData

});

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      GetAlbumAction: bindActionCreators(GetAlbumAction, dispatch),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(firstScreen);
