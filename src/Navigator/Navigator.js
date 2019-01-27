import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator,NavigationActions } from 'react-navigation';
import FirstScreen from '../Screen/firstScreen';
import SecondScreen from '../Screen/secondScreen';

import {  Text, StyleSheet, Button, Image,Dimensions,SafeAreaView,NetInfo,TouchableOpacity } from 'react-native';
import { AsyncStorage,View } from 'react-native';



const StackNavigatorMain = StackNavigator({
    FirstScreen :  { screen: FirstScreen , navigationOptions: { header: null } },
    SecondScreen : { screen: SecondScreen },
},
  {
     initialRouteName : 'FirstScreen',
     navigationOptions: {
        gesturesEnabled: false
     }
  },{
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: 'black'},
      title: 'First',
      headerTintColor: 'black',
      gesturesEnabled: false,
    })
  })




  class Navigator extends Component<Props> {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {

    }

    componentWillMount(){

    }


  render() {
    return (
        <StackNavigatorMain/>
    );
  }

}



export default Navigator
