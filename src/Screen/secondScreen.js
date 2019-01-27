
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput} from 'react-native';

import {
  API,
} from "../Helper/constant";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Addition_Action from "../Actions/addOperationAction";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

type Props = {};

 class secondScreen extends Component<Props> {

   constructor(props) {
       super(props);
       this.state = { textname: '',textemail: '',textcompany: '' };
     }

componentDidMount(){

}

componentWillMount(){

}

submitPress(){
  var dict = {};

  dict['name'] = this.state.textname;
  dict['email'] = this.state.textemail;
  dict['company'] = this.state.textcompany;

  this.props.actions.Addition_Action.performAdditionAction(dict).then(() => {
          this.handleLoginResponse();
  });
}

async handleLoginResponse() {
    console.log(this.props.employeeData);
    this.props.navigation.goBack(null);
}

  render() {
    return (
      <View style={{backgroundColor:'white',flex:1,alignItems:'center'}}>
        <View style={{height:deviceHeight*0.80,width:deviceWidth,alignItems:'center'}}>
              <TextInput
                  placeholder="Enter Name"
                  style={{height: 40,marginTop:deviceHeight*0.05, borderColor: 'gray', borderWidth: 1,width:deviceWidth*0.80,borderRadius:10,paddingLeft:10}}
                  onChangeText={(textname) => this.setState({textname})}
                  value={this.state.textname}
                />

                <TextInput
                    placeholder="Enter Email"
                    style={{height: 40,marginTop:deviceHeight*0.05, borderColor: 'gray', borderWidth: 1,width:deviceWidth*0.80,borderRadius:10,paddingLeft:10}}
                    onChangeText={(textemail) => this.setState({textemail})}
                    value={this.state.textemail}
                  />

                  <TextInput
                      placeholder="Enter comapny name"
                      style={{height: 40,marginTop:deviceHeight*0.05, borderColor: 'gray', borderWidth: 1,width:deviceWidth*0.80,borderRadius:10,paddingLeft:10}}
                      onChangeText={(textcompany) => this.setState({textcompany})}
                      value={this.state.textcompany}
                    />

          </View>


        <TouchableOpacity style={{height:deviceHeight*0.10,width:deviceWidth*0.50,backgroundColor:'lightgray',borderRadius:10,alignItems:'center',justifyContent:'center'}}
          onPress={() => this.submitPress()}>
              <Text>Submit</Text>
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
});

//---> Redux  Methods
const mapStateToProps = state => ({
  employeeData: state.addOperationReducer.employeeData,
});

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      Addition_Action: bindActionCreators(Addition_Action, dispatch),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(secondScreen);
