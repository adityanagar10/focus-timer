import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus'
import { Timer } from './src/features/TImer/Timer'
import { colors } from './src/utils/colors'
import { spacing } from './src/utils/sizes'

export default function App() {
  const [focusSubject, setFocusSubject] = useState("coding");

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} onTimerEnd = {()=>
        setFocusSubject(null)
        } />
      ) : (
        <Focus addSubject={setFocusSubject}/>
      )}
      <Text> {focusSubject} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.md ,
    backgroundColor: colors.black,
    color: "white",
  },
});
