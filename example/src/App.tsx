import * as React from 'react';
import { IconButton, Provider as PaperProvider } from 'react-native-paper';

import { Platform, StyleSheet, View } from 'react-native';
import StopwatchTimer, {
  StopwatchTimerMethods,
} from 'react-native-animated-stopwatch-timer';

export default function App() {
  const stopwatchRef = React.useRef<StopwatchTimerMethods>(null);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StopwatchTimer
          ref={stopwatchRef}
          containerStyle={styles.stopWatchContainer}
          digitStyle={Platform.select({
            ios: {
              width: 32,
            },
            android: undefined,
          })}
          separatorStyle={Platform.select({
            ios: {
              width: 14,
            },
            android: undefined,
          })}
          textCharStyle={styles.stopWatchChar}
          trailingZeros={2}
        />
        <View style={styles.buttonsContainer}>
          {/** @ts-ignore */}
          <IconButton
            icon="play"
            mode="contained"
            size={32}
            onPress={() => stopwatchRef.current?.play()}
          />
          {/** @ts-ignore */}
          <IconButton
            icon="pause"
            mode="contained"
            size={32}
            onPress={() => stopwatchRef.current?.pause()}
          />
          {/** @ts-ignore */}
          <IconButton
            icon="refresh"
            mode="contained"
            size={32}
            onPress={() => stopwatchRef.current?.reset()}
          />
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopWatchContainer: {
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'black',
    borderColor: 'gray',
    borderRadius: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 240,
    paddingTop: 48,
  },
  stopWatchChar: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#9CCC65',
  },
});
