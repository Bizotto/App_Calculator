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
  opretionButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDoble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export default props => {
  const stylesButton = [styles.button];
  if (props.doble) stylesButton.push(styles.buttonDoble);
  if (props.triple) stylesButton.push(styles.buttonTriple);
  if (props.opretion) stylesButton.push(styles.opretionButton)
  return (
    <TouchableHighLight onPress={() => props.onClick(props.label)}>
      <Text Style={stylesButton}>{props.label}</Text>
    </TouchableHighLight>
  );
};
