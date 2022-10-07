import React from 'react';
import {Pressable, Text} from 'react-native';
import {string} from 'prop-types';

import styles from './styles';

const Button = ({text, onPress}) => (
  <Pressable onPress={onPress} style={styles.container}>
    <Text>{text}</Text>
  </Pressable>
);

Button.propTypes = {
  text: string.isRequired,
};

export default Button;
