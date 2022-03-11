import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationSample} from './NavigationSample';
import {SheetSample} from './SheetSample';
import {NavigationContainer} from '@react-navigation/native';

const _App = () => {
  return (
    <View
      style={{
        borderWidth: 3,
        borderColor: 'red',
        height: '100%',
      }}>
      <NavigationSample />
      <SheetSample />
    </View>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <_App />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
