import React, {useState} from 'react';
import {View, Text} from 'react-native';

import styles from './style';

export default function Card({navigation}) {
  return (
    <View style={styles.inputBar}>
      <View style={styles.cardHeader}>
        <Text>11s</Text>
      </View>
      <View style={styles.cardBody}>
        <Text>11s</Text>
      </View>

      <View style={styles.cardFooter}>
        <Text>11s</Text>
      </View>

      <View style={styles.cardDescription}>
        <Text>11s</Text>
      </View>
    </View>
  );
}
