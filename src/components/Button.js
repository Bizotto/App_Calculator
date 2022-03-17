import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighLight} from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
});

export default props => {
  return (
    <TouchableHighLight onPress={props.onClick}>
      <Text Style={styles.button}>{props.label}</Text>
    </TouchableHighLight>
  );
};
