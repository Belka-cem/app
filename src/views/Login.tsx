import React from 'react';
import {

  Text,
   TouchableHighlight, StyleSheet
} from 'react-native';
import Button from '../components/button';
import r from '../res/r';

interface Logintrops{
  login: ()=> void
}

export default class Login extends React.Component<Logintrops>{


  logIn(){
    this.props.login
  }

  render(){
    return (
      <>
      <Text>Coonexion</Text>
      <Button btn={this.props.login} title={r.i18n.t("login")}></Button>
      </>
    )
  }
}

const styles = StyleSheet.create({
})