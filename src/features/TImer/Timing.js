import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/Rounded.button';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timeButton}>
        <RoundedButton size={70} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timeButton}>
        <RoundedButton size={70} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timeButton}>
        <RoundedButton size={70} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timeButton: {
    flex: 1,
    alignItems: 'center',
  },
});
