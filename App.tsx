import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DetailsScreen, HomeScreen, NavigationSample} from './NavigationSample';
import {SheetSample} from './SheetSample';
import {NavigationContainer, NavigationContext} from '@react-navigation/native';
import {createMyNavigator} from './CustomNavigator';

const _App = () => {
  return (
    <View
      style={{
        borderWidth: 3,
        borderColor: 'red',
        height: '100%',
      }}>
      <NavigationSample />
      {/* <SheetSample /> */}
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
