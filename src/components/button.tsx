import React from 'react';
import {
  Text,
 TouchableHighlight, StyleSheet
} from 'react-native';
import r from '../res/r';





interface BtnProps{
    btn: ()=> void,
    title: string

  }


export default class Button extends React.Component<BtnProps> {

    render(){
        return (
            <>
             <TouchableHighlight style={styles.button}  onPress={this.props.btn}>
                <Text style={styles.text}>{this.props.title}</Text>
            </TouchableHighlight>
            </>
        )
    }
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: r.colors.gold, 
      padding: 20,
      borderRadius: 20
    },
  
    text: {
      color: "#FFFF",
      fontSize: 20
    }
  })