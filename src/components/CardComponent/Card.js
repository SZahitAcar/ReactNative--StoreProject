import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Card.styles';

const Card = ({props}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.imgURL}} />
      <Text>{props.title}</Text>
      <Text>{props.price}</Text>
    </View>
  );
};

export default Card;
