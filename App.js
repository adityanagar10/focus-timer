import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/TImer/Timer';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

export default function App() {
  const [focusSubject, setFocusSubject] = useState('');
  const [focusHistory, setFocusHistory] = useState([]);

  useEffect(() => {
    if (focusSubject) {
      setFocusHistory([...focusHistory, focusSubject]);
    }
  }, [focusSubject]);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => setFocusSubject(null)}
          clearSubject={() => setFocusSubject(null)}
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      <Text> {focusSubject} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.md,
    backgroundColor: colors.black,
    color: 'white',
  },
});
