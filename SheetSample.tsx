import React, {useCallback, useMemo, useRef} from 'react';

import BottomSheet, {
  BottomSheetView,
  TouchableOpacity,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RouteConfig, useNavigation} from '@react-navigation/native';
import {HomeScreen, MyNavigatiorSample} from './NavigationSample';

interface ScreenProps {
  title?: string;
  nextScreenName?: string;
  navgation?: any;
}

const Screen = (props: ScreenProps) => {
  return (
    <View
      style={{
        height: Math.ceil(Math.random() * 5) * 50,
        borderWidth: 3,
        borderColor: 'purple',
      }}>
      <TouchableOpacity
        onPress={() => {
          props.navgation.navigate(props.nextScreenName);
        }}>
        <Text>{JSON.stringify(props)}</Text>
      </TouchableOpacity>
      <View style={{flex: 1}} />
      <View style={{padding: 10, backgroundColor: 'brown'}} />
    </View>
  );
};

const Stack = createStackNavigator();

function MyStack() {
  const Screens = Array(3)
    .fill(0)
    .map((v, i, a) => {
      var title = i.toString();
      var next = ((i + 1) % a.length).toString();

      return (
        <Stack.Screen key={title} name={title}>
          {props => (
            <Screen
              title={title}
              nextScreenName={next}
              navgation={props.navigation}
            />
          )}
        </Stack.Screen>
      );
    });

  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,

        cardStyle: {
          backgroundColor: 'transparent',
          borderWidth: 3,
          borderColor: 'green',
          height: 200,
        },
      }}>
      {Screens}
    </Stack.Navigator>
  );
}
const SheetSample = ({addNav}: any) => {
  const navigation = useNavigation();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const initialSnapPoints = useMemo(
    () => ['CONTENT_HEIGHT', '90%', '100%'],
    [],
  );

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={animatedSnapPoints}
      index={1}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}>
      <BottomSheetView
        // style={contentContainerStyle}
        onLayout={handleContentLayout}>
        {/* <View style={{borderWidth: 3, padding: '10%', minHeight: 200}}> */}
        {/* </View> */}
        <HomeScreen navigation={navigation} />
      </BottomSheetView>
    </BottomSheet>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
export {SheetSample};
