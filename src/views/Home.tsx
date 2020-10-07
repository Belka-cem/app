import React from 'react';
import {

  Text,
  
} from 'react-native';
import Button from '../components/button';
import r from '../res/r';

interface LogoutProps{
  logout : ()=> void
}

export default class Home extends React.Component<LogoutProps> {

 

  render(){
    
    
    return (
      <>
      <Text>Welcome</Text>
      <Button title={r.i18n.t("logout")} btn={this.props.logout}></Button>
      </>
    )
  }
}
