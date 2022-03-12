// In App.js in a new project

import * as React from 'react';
import {View, Text, Button, ViewProps} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SheetSample} from './SheetSample';
import {createStackNavigator} from '@react-navigation/stack';
import {createMyNavigator} from './CustomNavigator';

const My = createMyNavigator();

interface ICustomScreenProps extends ViewProps {
  navigation?: any;
  route: any;
}

export const CustomScreen = (props: ICustomScreenProps) => {
  console.log(props);
  var ci = sna.findIndex(v => {
    return v == props.route.name;
  });
  var ni = (ci + 1) % sna.length;
  var nsn = sna[ni];
  return (
    <View style={[{}, props.style]}>
      <View style={{padding: 10, backgroundColor: 'red'}} />
      <View style={{}}>
        <Button
          title={'Burası ' + props.route.name}
          onPress={() => {
            props.navigation.navigate(nsn);
          }}
        />
      </View>
      <View
        style={{
          borderWidth: 10,
          borderColor: 'red',
          padding: 30 * (ci + 1),
          backgroundColor: 'lightgreen',
        }}
      />
    </View>
  );
};
const sna = ['a', 'b'];
export const MyNavigatiorSample = () => {
  return (
    <My.Navigator>
      {sna.map(v => {
        return <My.Screen key={v} name={v} component={CustomScreen} />;
      })}
      {/* <My.Screen name="HomeScreen" component={CustomScreen} />
  <My.Screen name="DetailsScreen" component={CustomScreen} /> */}
    </My.Navigator>
  );
};

export function HomeScreen({navigation}: any) {
  navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go To A"
        onPress={() => {
          navigation.navigate('a');
        }}
      />

      <Button
        title="Go To B"
        onPress={() => {
          navigation.navigate('b');
        }}
      />
      <MyNavigatiorSample />
      <View
        style={{
          // height: 300,
          justifyContent: 'flex-start',
          alignSelf: 'baseline',
          // aspectRatio: 0.8,
          borderWidth: 1,
        }}></View>
    </View>
  );
}

export function DetailsScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />

      <SheetSample />
    </View>
  );
}
const Stack = createStackNavigator();
function NavigationSample() {
  return (
    <Stack.Navigator
      defaultScreenOptions={{}}
      screenOptions={{}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export {NavigationSample};
