import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { FocusHistory } from './src/features/focus/FocusHistory';
import { Timer } from './src/features/TImer/Timer';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 0,
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState('');
  const [focusHistory, setFocusHistory] = useState([]);

  const addHistoryWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }]);
  };

  const onClear = () => {
      //to add
  }
  
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addHistoryWithState(focusSubject, STATUSES.COMPLETE);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addHistoryWithState(focusSubject, STATUSES.CANCELLED);
            setFocusSubject(null);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear = {onClear} />
        </>
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

