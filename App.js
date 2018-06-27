import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { OpenCamera } from './src/OpenCamera';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.centerOfScreen}>
        <OpenCamera />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerOfScreen: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
