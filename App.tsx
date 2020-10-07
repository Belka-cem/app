/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput, Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/views/Home';
import Login from './src/views/Login';
import  AsyncStorage  from '@react-native-community/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';

declare const global: {HermesInternal: null | {}};



class App extends React.Component {
   state = {
    hasUser: false
   }



   logIn(){

  
    AsyncStorage.setItem("@hasUser", String(this.state.hasUser)   );
    this.setState({hasUser: true})

  }

  logout(){
    crashlytics().log('login');
    try {
      1/0
    } catch (error) {
      crashlytics().recordError(error);
      console.log(error);
    }

    this.setState({hasUser: false})
  }

  async componentDidMount(){
    crashlytics().log('App mounted');

    const hasUser = Boolean(await AsyncStorage.getItem("@hasUser") || "false") 
    if (hasUser){
      
      this.setState({hasUser: hasUser})
    }  

  }


  render(){
    const {hasUser} = this.state
    console.log(hasUser);

    if (hasUser === null){
      return (
        <View style={styles.container}>
          <Text>Loading ...</Text>
        </View>
      )
    }
    return (
      <>
        <View style={styles.container}>
          {hasUser === true && <Home logout={()=> crashlytics().crash()}/>}
          {hasUser === false && <Login login={()=> this.logIn()}></Login>}
        </View>
        
      </>
    );
  }

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center"
  },
  text : {
    color: "blue"
  },
  form: {
    flex: 0.3, 
    borderWidth: 5
  }
});

export default App;
